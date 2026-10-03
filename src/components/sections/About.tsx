import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile, stats, education } from '../../data/resume'
import { StatCounter } from '../StatCounter'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const textRef = useRef<HTMLParagraphElement>(null)

  // words light up one by one as the paragraph scrolls through the viewport
  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.word'),
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.12,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: true },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="section about">
      <span className="section-label mono">(02) About</span>

      <p className="about-statement" ref={textRef}>
        {profile.summary.split(' ').map((w, i) => (
          <span className="word" key={i}>
            {w}{' '}
          </span>
        ))}
      </p>

      <div className="stats" data-reveal-group>
        {stats.map((stat) => (
          <div className="stat reveal" key={stat.label}>
            <StatCounter value={stat.value} suffix={stat.suffix} />
            <span className="stat-label mono">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="about-edu reveal">
        <span className="mono">Education</span>
        <p>{education.degree}</p>
        <p className="about-edu-meta mono">
          {education.school} · {education.period}
        </p>
      </div>
    </section>
  )
}
