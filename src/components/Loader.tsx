import { useEffect, useState } from 'react'

interface LoaderProps {
  onDone: () => void
}

export function Loader({ onDone }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let raf: number
    const start = performance.now()
    const duration = 1100

    function tick(now: number) {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setHidden(true)
          onDone()
        }, 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div className={`loader${hidden ? ' loader-hidden' : ''}`}>
      <div className="loader-mark">PT</div>
      <div className="loader-bar">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader-pct">{progress}%</div>
    </div>
  )
}
