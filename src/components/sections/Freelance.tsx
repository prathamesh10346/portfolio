import { freelance } from '../../data/resume'

export function Freelance() {
  return (
    <section id="freelance" className="section freelance">
      <span className="section-label mono">(06) Freelance</span>
      <h2 className="section-title">Freelance builds, shipped for real clients.</h2>

      <div className="fl-list" data-reveal-group>
        {freelance.map((job) => (
          <article className="fl reveal" key={job.id}>
            <header className="fl-head mono">
              <span>Freelance · {job.agency}</span>
              <span>{job.role}</span>
            </header>

            <h3 className="fl-title">{job.title}</h3>
            <p className="fl-client mono">{job.client}</p>
            <p className="fl-summary">{job.summary}</p>

            <div className="fl-owned-label mono">{job.ownedLabel}</div>
            <ul className="fl-owned">
              {job.owned.map((item, i) => (
                <li key={item.name}>
                  <span className="mono fl-num">0{i + 1}</span>
                  <strong>{item.name}</strong>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>

            <ol className="fl-flow mono" aria-label="Data flow">
              {job.flow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <ul className="fl-stack mono">
              {job.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="fl-note mono">{job.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
