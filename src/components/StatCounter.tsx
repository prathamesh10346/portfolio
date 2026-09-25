import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function StatCounter({ value, suffix = '', duration = 1400 }: StatCounterProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const isDecimal = value % 1 !== 0

          function tick(now: number) {
            const progress = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = value * eased
            setDisplay(isDecimal ? Math.round(current * 10) / 10 : Math.round(current))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className="stat-value">
      {display}
      {suffix}
    </span>
  )
}
