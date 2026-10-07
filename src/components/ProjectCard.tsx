import type { CSSProperties } from 'react'
import type { projects } from '../data/resume'

type Project = (typeof projects)[number]

const SURFACES = ['#f2efe6', 'var(--accent)', '#ff5a2c']

// Sticky card: as the next one slides over it, the stack builds up like a deck.
export function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <article
      className="project"
      style={{ '--i': index, '--surface': SURFACES[index % SURFACES.length] } as CSSProperties}
    >
      <div className="project-copy">
        <div className="project-top mono">
          <span>
            0{index + 1} / 0{total}
          </span>
          <span>{project.stack.slice(0, 2).join(' · ')}</span>
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack mono">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {project.links && (
          <div className="project-links">
            {project.links.android && (
              <a href={project.links.android} target="_blank" rel="noreferrer" data-cursor-hover>
                Google Play ↗
              </a>
            )}
            {project.links.ios && (
              <a href={project.links.ios} target="_blank" rel="noreferrer" data-cursor-hover>
                App Store ↗
              </a>
            )}
          </div>
        )}
      </div>

      <div className="project-shots" style={{ '--c': project.images.length } as CSSProperties}>
        {project.images.map((src, i) => (
          <figure className="shot" style={{ '--n': i } as CSSProperties} key={src} data-cursor-hover>
            <img src={src} alt={`${project.name} screen ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  )
}
