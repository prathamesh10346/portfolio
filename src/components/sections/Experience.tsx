import { useState } from 'react'
import { experience } from '../../data/resume'

export function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="section experience">
      <span className="section-label mono">(04) Experience</span>
      <h2 className="section-title">From intern to shipping the crypto-wallet stack.</h2>

      <div className="xp-list" data-reveal-group>
        {experience.map((job, i) => {
          const isOpen = open === i
          return (
            <article className={`xp reveal${isOpen ? ' xp-open' : ''}`} key={`${job.company}-${job.period}`}>
              <button
                type="button"
                className="xp-head"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                data-cursor-hover
              >
                <span className="xp-period mono">{job.period}</span>
                <span className="xp-main">
                  <span className="xp-company">{job.company}</span>
                  <span className="xp-role">{job.role}</span>
                </span>
                <span className="xp-toggle" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="xp-body">
                <ul className="xp-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
