import { certifications, profile } from '../../data/resume'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <div className="contact-main reveal" data-reveal-group>
          <span className="eyebrow">Contact</span>
          <h2 className="contact-title">
            Have a product to build?
            <br />
            Let's make it <span className="gradient-text">ship-ready</span>.
          </h2>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary" data-cursor-hover>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="btn" data-cursor-hover>
              {profile.phone}
            </a>
          </div>

          <div className="contact-certs">
            <span className="contact-certs-label">Certifications</span>
            <ul>
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <span>{cert.title}</span>
                  <span className="contact-certs-issuer">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  )
}
