import { useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import type { projects } from '../data/resume'

type Project = (typeof projects)[number]

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

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
  const hasMultiple = project.images.length > 1

  function step(delta: number) {
    setActive((current) => (current + delta + project.images.length) % project.images.length)
  }

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
        <div className={project.framed ? 'project-shot project-shot-framed' : 'project-shot'}>
          <img src={project.images[active]} alt={`${project.name} app screenshot ${active + 1}`} loading="lazy" />
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              className="project-nav project-nav-prev"
              aria-label="Previous screenshot"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
            >
              ‹
            </button>
            <button
              type="button"
              className="project-nav project-nav-next"
              aria-label="Next screenshot"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
            >
              ›
            </button>
            <div className="project-dots">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === active ? 'project-dot project-dot-active' : 'project-dot'}
                  aria-label={`Show screenshot ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActive(i)
                  }}
                />
              ))}
            </div>
          </>
        )}
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
        {project.links && (
          <div className="project-links">
            {project.links.android && (
              <a href={project.links.android} target="_blank" rel="noreferrer" data-cursor-hover>
                Play Store
              </a>
            )}
            {project.links.ios && (
              <a href={project.links.ios} target="_blank" rel="noreferrer" data-cursor-hover>
                App Store
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
