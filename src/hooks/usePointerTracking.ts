import { useEffect } from 'react'
import { scrollState } from '../lib/scrollState'

export function usePointerTracking() {
  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      scrollState.pointerX = (event.clientX / window.innerWidth) * 2 - 1
      scrollState.pointerY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])
}
