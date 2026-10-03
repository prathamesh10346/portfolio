import { useEffect, useRef, useState } from 'react'
import { scrollState } from '../lib/scrollState'
import { scrollToId } from '../lib/lenisInstance'
import { profile } from '../data/resume'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
]

function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })
    const update = () => setTime(fmt.format(new Date()))
    update()
    const id = window.setInterval(update, 15000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function Nav() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)
  const time = useClock()

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let rafId: number
    const update = () => {
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${scrollState.progress})`
      rafId = requestAnimationFrame(update)
    }
    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  function go(id: string) {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`nav${open ? ' nav-open' : ''}`}>
      <div ref={progressRef} className="nav-progress" />
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); go('hero') }} data-cursor-hover>
          PT<sup>®</sup>
        </a>

        <span className="nav-clock mono">
          <i className="live-dot" /> Pune {time} IST
        </span>

        <nav className="nav-links">
          {LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'nav-link nav-link-active' : 'nav-link'}
              onClick={(e) => { e.preventDefault(); go(link.id) }}
              data-cursor-hover
            >
              <span className="nav-link-num">0{i + 1}</span> {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} download className="nav-resume" data-cursor-hover>
            Résumé ↓
          </a>
        </nav>

        <button className="nav-burger" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
