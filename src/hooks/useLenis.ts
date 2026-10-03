import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollState } from '../lib/scrollState'
import { lenisRef } from '../lib/lenisInstance'

gsap.registerPlugin(ScrollTrigger)

interface LenisScrollEvent {
  scroll: number
  limit: number
  velocity: number
}

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.1 : 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ({ scroll, limit, velocity }: LenisScrollEvent) => {
      scrollState.scrollY = scroll
      scrollState.progress = limit > 0 ? scroll / limit : 0
      scrollState.velocity = velocity
    })

    lenis.on('scroll', ScrollTrigger.update)

    function tickerCallback(time: number) {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])
}
