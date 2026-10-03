import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>('[data-reveal-group]')
      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('.reveal')
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.09,
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
          },
        })
      })

      const lonely = gsap.utils.toArray<HTMLElement>('.reveal:not([data-reveal-group] .reveal)')
      lonely.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
    })

    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      cancelAnimationFrame(refreshId)
      ctx.revert()
    }
  }, deps)
}
