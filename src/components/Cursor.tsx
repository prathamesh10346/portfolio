import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const ring = { x: 0, y: 0 }
    let rafId: number

    function handleMove(event: PointerEvent) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      }
      ring.x = event.clientX
      ring.y = event.clientY
      const target = event.target as HTMLElement
      setHovering(Boolean(target.closest('a, button, [data-cursor-hover]')))
    }

    function animateRing() {
      if (ringRef.current) {
        const current = ringRef.current
        const rect = current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const nx = cx + (ring.x - cx) * 0.18
        const ny = cy + (ring.y - cy) * 0.18
        current.style.transform = `translate3d(${nx}px, ${ny}px, 0) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    rafId = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring${hovering ? ' cursor-ring-hover' : ''}`} />
    </>
  )
}
