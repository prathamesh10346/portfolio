import { useRef } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import type { projects } from '../data/resume'

type Project = (typeof projects)[number]

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    card.style.setProperty('--rx', `${(-py * 10).toFixed(2)}deg`)
    card.style.setProperty('--ry', `${(px * 14).toFixed(2)}deg`)
    card.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`)
    card.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`)
  }

  function handleLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  const reversed = index % 2 === 1

  return (
    <article
      className={`project-card reveal${reversed ? ' project-card-reverse' : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
    >
      <div
        ref={cardRef}
        className="project-visual"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor-hover
      >
        <div className="project-glow" />
        <div className="project-phone">
          <img src={project.image} alt={`${project.name} app screenshot`} loading="lazy" />
        </div>
      </div>

      <div className="project-copy">
        <span className="project-index">0{index + 1}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
