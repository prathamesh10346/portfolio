import type Lenis from 'lenis'

export const lenisRef: { current: Lenis | null } = { current: null }

export function scrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  if (lenisRef.current) {
    lenisRef.current.scrollTo(target, { offset: 0 })
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
