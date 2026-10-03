import { useEffect, useRef } from 'react'
import { scrollState } from '../lib/scrollState'

interface MarqueeProps {
  words: string[]
  direction?: 1 | -1
  className?: string
}

// Endless ticker whose speed spikes with scroll velocity.
export function Marquee({ words, direction = 1, className = '' }: MarqueeProps) {
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = track.current
    if (!el) return
    let x = 0
    let raf: number
    let prev = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(now - prev, 50)
      prev = now
      const half = el.scrollWidth / 2
      x -= direction * (0.05 + Math.abs(scrollState.velocity) * 0.012) * dt
      if (half > 0) x = ((x % half) + half) % half - half
      el.style.transform = `translate3d(${x}px,0,0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [direction])

  const items = [...words, ...words]
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" ref={track}>
        {items.map((w, i) => (
          <span className="marquee-item" key={`${w}-${i}`}>
            {w}
            <span className="marquee-star">✺</span>
          </span>
        ))}
      </div>
    </div>
  )
}
