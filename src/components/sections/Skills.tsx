import { skillGroups } from '../../data/resume'

const marqueeWords = skillGroups.flatMap((g) => g.skills)

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={`${word}-${i}`} className="marquee-item">
              {word}
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>A toolkit built for shipping, not just prototyping.</h2>
        </div>

        <div className="skills-grid" data-reveal-group>
          {skillGroups.map((group) => (
            <div className="skill-card glass reveal" key={group.title}>
              <h3 className="skill-card-title">{group.title}</h3>
              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
