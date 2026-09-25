import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../../data/resume'
import { scrollToId } from '../../lib/lenisInstance'

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15, defaults: { ease: 'power3.out' } })
      tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.6 })
        .to('.hero-line', { opacity: 1, y: 0, duration: 0.95, stagger: 0.12 }, '-=0.3')
        .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, '-=0.5')
        .to('.hero-scroll-cue', { opacity: 1, duration: 0.6 }, '-=0.3')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="section hero" ref={rootRef}>
      <div className="section-inner hero-inner">
        <div className="hero-scrim" />
        <span className="eyebrow hero-eyebrow">{profile.role} · {profile.location}</span>
        <h1 className="hero-title">
          <span className="hero-line">Building mobile products</span>
          <span className="hero-line">
            that feel <span className="gradient-text">alive</span>,
          </span>
          <span className="hero-line">from Flutter to Web3.</span>
        </h1>
        <p className="hero-sub">{profile.tagline} {profile.summary}</p>
        <div className="hero-actions">
          <a
            href="#projects"
            className="btn btn-primary hero-cta"
            data-cursor-hover
            onClick={(e) => {
              e.preventDefault()
              scrollToId('projects')
            }}
          >
            View the work
          </a>
          <a href={`mailto:${profile.email}`} className="btn hero-cta" data-cursor-hover>
            Let's talk
          </a>
        </div>
      </div>
      <div className="hero-scroll-cue">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
