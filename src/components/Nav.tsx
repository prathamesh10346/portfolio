import { useEffect, useRef, useState } from 'react'
import { scrollState } from '../lib/scrollState'
import { scrollToId } from '../lib/lenisInstance'
import { profile } from '../data/resume'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let rafId: number
    function update() {
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrollState.progress})`
      }
      rafId = requestAnimationFrame(update)
    }
    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  function handleNavigate(id: string) {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="nav">
      <div className="nav-progress-track">
        <div ref={progressRef} className="nav-progress-fill" />
      </div>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNavigate('hero') }}>
          <span className="nav-brand-mark">PT</span>
          <span className="nav-brand-name">{profile.name.split(' ')[0]}</span>
        </a>

        <nav className={`nav-links${open ? ' nav-links-open' : ''}`}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'nav-link nav-link-active' : 'nav-link'}
              onClick={(e) => {
                e.preventDefault()
                handleNavigate(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={profile.resumeUrl} download className="btn btn-primary nav-cta" data-cursor-hover>
          Resume
        </a>

        <button
          className={`nav-burger${open ? ' nav-burger-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
