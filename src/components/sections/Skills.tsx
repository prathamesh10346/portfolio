import { skillGroups } from '../../data/resume'

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <span className="section-label mono">(03) Toolkit</span>
      <h2 className="section-title">Built for shipping, not just prototyping.</h2>

      <ul className="skill-list" data-reveal-group>
        {skillGroups.map((group, i) => (
          <li className="skill-row reveal" key={group.title} data-cursor-hover tabIndex={0}>
            <span className="skill-num mono">0{i + 1}</span>
            <h3 className="skill-title">{group.title}</h3>
            <ul className="skill-tags mono">
              {group.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <span className="skill-arrow" aria-hidden="true">
              ↗
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
