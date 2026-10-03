import { useEffect } from 'react'
import { scrollState } from '../lib/scrollState'

const SCRAMBLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/_-'

function scramble(el: HTMLElement) {
  const final = el.dataset.text ?? el.textContent ?? ''
  el.dataset.text = final
  let frame = 0
  const total = 18
  const id = window.setInterval(() => {
    frame++
    const reveal = Math.floor((frame / total) * final.length)
    el.textContent = final
      .split('')
      .map((c, i) => (c === ' ' || i < reveal ? c : SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]))
      .join('')
    if (frame >= total) {
      el.textContent = final
      window.clearInterval(id)
    }
  }, 30)
}

// Global, delegated micro-interactions: magnetic buttons, a pulse through the 3D blob on click,
// and scrambled section labels.
export function useInteractions(deps: unknown[] = []) {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let magnet: HTMLElement | null = null

    function onMove(e: PointerEvent) {
      const target = e.target as HTMLElement
      if (!fine || reduced) return
      const btn = target.closest<HTMLElement>('.btn, .theme-dot, .hero-badge')
      if (magnet && magnet !== btn) {
        magnet.style.transform = ''
        magnet = null
      }
      if (btn) {
        const r = btn.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        btn.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`
        magnet = btn
      }
    }

    function onClick(e: MouseEvent) {
      void e
      scrollState.burstAt = performance.now()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('click', onClick)

    const labels = document.querySelectorAll<HTMLElement>('.section-label')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting && !reduced) {
            scramble(en.target as HTMLElement)
            io.unobserve(en.target)
          }
        }),
      { threshold: 1 },
    )
    labels.forEach((l) => io.observe(l))

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('click', onClick)
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
