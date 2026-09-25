import { profile, stats, education } from '../../data/resume'
import { StatCounter } from '../StatCounter'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <div className="about-grid" data-reveal-group>
          <div className="about-copy reveal">
            <span className="eyebrow">About</span>
            <h2>
              Two years deep in Flutter, fintech rails, and on-chain plumbing.
            </h2>
            <p className="about-text">{profile.summary}</p>
            <div className="about-edu glass">
              <p className="about-edu-degree">{education.degree}</p>
              <p className="about-edu-school">{education.school}</p>
              <span className="about-edu-period">{education.period}</span>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="stat-card glass reveal" key={stat.label}>
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
