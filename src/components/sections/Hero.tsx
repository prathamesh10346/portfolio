import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../../data/resume'
import { scrollToId } from '../../lib/lenisInstance'
import { SplitChars } from '../SplitChars'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power4.out' } })
      tl.fromTo('.hero .char', { yPercent: 115, opacity: 1 }, { yPercent: 0, duration: 1.25, stagger: 0.035 })
        .fromTo('.hero-fade', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, '-=0.8')
        .fromTo(
          '.hero-badge',
          { opacity: 0, scale: 0.3, rotate: -120 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'elastic.out(1,0.6)' },
          '-=0.7',
        )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="hero" ref={rootRef}>
      <div className="hero-top mono">
        <span className="hero-fade">(01) {profile.role}</span>
        <span className="hero-fade hero-avail">
          <i className="live-dot" /> Available for work — 2026
        </span>
      </div>

      <h1 className="hero-title" data-cursor-hover>
        <span className="hero-line">
          <SplitChars text="PRATHMESH" />
        </span>
        <span className="hero-line hero-line-2">
          <SplitChars text="TANGADE" />
          <span className="hero-reg">®</span>
        </span>
      </h1>

      <div className="hero-bottom">
        <div className="hero-intro">
          <p className="hero-fade hero-tagline">{profile.tagline}</p>
          <div className="hero-actions hero-fade">
            <a
              href="#projects"
              className="btn btn-solid"
              data-cursor-hover
              onClick={(e) => { e.preventDefault(); scrollToId('projects') }}
            >
              See the work <span>↗</span>
            </a>
            <a href={`mailto:${profile.email}`} className="btn" data-cursor-hover>
              Say hello
            </a>
          </div>
        </div>

        <button
          type="button"
          className="hero-badge"
          onClick={() => scrollToId('about')}
          aria-label="Scroll to about"
          data-cursor-hover
        >
          <svg viewBox="0 0 200 200" className="hero-badge-ring" aria-hidden="true">
            <defs>
              <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#badge-circle">SCROLL DOWN ✺ SCROLL DOWN ✺ SCROLL DOWN ✺ </textPath>
            </text>
          </svg>
          <span className="hero-badge-arrow">↓</span>
        </button>
      </div>
    </section>
  )
}
