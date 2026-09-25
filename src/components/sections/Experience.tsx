import { experience } from '../../data/resume'

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>From intern to shipping the crypto-wallet stack.</h2>
        </div>

        <div className="timeline" data-reveal-group>
          {experience.map((job) => (
            <article className="timeline-item reveal" key={`${job.company}-${job.period}`}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                <span className="timeline-line" />
              </div>
              <div className="timeline-content glass">
                <div className="timeline-heading">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
