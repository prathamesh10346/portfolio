import { certifications, profile } from '../../data/resume'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <span className="section-label mono">(08) Contact</span>

      <h2 className="contact-title" data-cursor-hover>
        <span>Let&rsquo;s build</span>
        <span className="contact-title-2">something loud.</span>
      </h2>

      <a href={`mailto:${profile.email}`} className="contact-mail" data-cursor-hover>
        {profile.email}
        <span aria-hidden="true">↗</span>
      </a>

      <div className="contact-grid">
        <div>
          <span className="mono contact-h">Elsewhere</span>
          <ul className="contact-links">
            <li>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" data-cursor-hover>
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" data-cursor-hover>
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} data-cursor-hover>
                {profile.phone}
              </a>
            </li>
            <li>
              <a href={profile.resumeUrl} download data-cursor-hover>
                Résumé (PDF) ↓
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="mono contact-h">Certifications</span>
          <ul className="contact-certs">
            {certifications.map((c) => (
              <li key={c.title}>
                <span>{c.title}</span>
                <span className="mono">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="footer mono">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
        <span>Built with React · Three.js · GSAP</span>
      </footer>
    </section>
  )
}
