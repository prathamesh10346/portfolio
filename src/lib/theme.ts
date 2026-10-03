import * as THREE from 'three'

export interface Theme {
  id: string
  label: string
  accent: string
}

export const themes: Theme[] = [
  { id: 'acid', label: 'Acid', accent: '#c6ff3d' },
  { id: 'blaze', label: 'Blaze', accent: '#ff4d1c' },
  { id: 'violet', label: 'Violet', accent: '#b69cff' },
  { id: 'ice', label: 'Ice', accent: '#6ef3ff' },
]

// Live colour the canvas reads every frame; applyTheme() retargets it and the scene eases across.
export const themeColor = new THREE.Color(themes[0].accent)
const themeTarget = new THREE.Color(themes[0].accent)

export function applyTheme(id: string) {
  const theme = themes.find((t) => t.id === id) ?? themes[0]
  document.documentElement.style.setProperty('--accent', theme.accent)
  themeTarget.set(theme.accent)
  try {
    localStorage.setItem('theme', theme.id)
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent('themechange', { detail: theme.id }))
}

export function easeThemeColor(delta: number) {
  themeColor.lerp(themeTarget, 1 - Math.exp(-delta * 4))
}

export function initTheme() {
  let saved: string | null = null
  try {
    saved = localStorage.getItem('theme')
  } catch {
    /* ignore */
  }
  if (saved) applyTheme(saved)
}
