import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { applyTheme, themes } from '../lib/theme'

export function ThemeDock() {
  const [active, setActive] = useState(() => {
    try {
      return localStorage.getItem('theme') ?? 'acid'
    } catch {
      return 'acid'
    }
  })

  useEffect(() => {
    const onChange = (e: Event) => setActive((e as CustomEvent<string>).detail)
    window.addEventListener('themechange', onChange)
    return () => window.removeEventListener('themechange', onChange)
  }, [])

  return (
    <div className="theme-dock" role="group" aria-label="Accent colour">
      <span className="theme-dock-label">Accent</span>
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`theme-dot${active === t.id ? ' theme-dot-active' : ''}`}
          style={{ '--c': t.accent } as CSSProperties}
          aria-label={`${t.label} accent`}
          title={t.label}
          onClick={() => applyTheme(t.id)}
          data-cursor-hover
        />
      ))}
    </div>
  )
}
