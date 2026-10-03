import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { ChromeBlob } from './ChromeBlob'
import { easeThemeColor } from '../../lib/theme'
import { sectionIds, scrollState } from '../../lib/scrollState'

// Tracks which section is centred in the viewport (as a float) so the blob can glide between them.
function SectionTracker() {
  const tops = useRef<number[]>([])
  const last = useRef(0)

  function measure() {
    tops.current = sectionIds.map((id) => {
      const el = document.getElementById(id)
      return el ? el.getBoundingClientRect().top + window.scrollY : 0
    })
  }

  useFrame((_, delta) => {
    easeThemeColor(delta)
    const now = performance.now()
    if (now - last.current > 800 || tops.current.length === 0) {
      last.current = now
      measure()
    }
    const t = tops.current
    const y = window.scrollY + window.innerHeight * 0.5
    let i = 0
    while (i < t.length - 1 && t[i + 1] <= y) i++
    const span = (t[i + 1] ?? document.documentElement.scrollHeight) - t[i]
    scrollState.sectionFloat = Math.min(i + (y - t[i]) / Math.max(span, 1), t.length - 1)
  })
  return null
}

export function CanvasBackground() {
  return (
    <div className="canvas-bg" aria-hidden="true">
      <Canvas dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 7], fov: 40 }}>
        <SectionTracker />
        <ambientLight intensity={0.15} />
        <Suspense fallback={null}>
          <ChromeBlob />
          {/* studio strips: the crisp white bands are what sell the chrome */}
          <Environment resolution={512}>
            {/* dim grey dome so the metal always has something to reflect, then off-axis strips for the highlights */}
            <Lightformer form="rect" intensity={0.9} color="#9a9a9a" position={[0, 0, -9]} scale={[40, 40, 1]} />
            <Lightformer form="rect" intensity={0.7} color="#8a8a8a" position={[0, -9, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[40, 40, 1]} />
            <Lightformer form="rect" intensity={0.8} color="#b0b0b0" position={[-9, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[40, 40, 1]} />
            <Lightformer form="rect" intensity={0.6} color="#7a7a7a" position={[9, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[40, 40, 1]} />
            <Lightformer form="rect" intensity={7} color="#ffffff" position={[-3, 6, 3]} rotation={[0.9, -0.5, 0.5]} scale={[14, 1.6, 1]} />
            <Lightformer form="rect" intensity={5} color="#ffffff" position={[7, 1, 2]} rotation={[0, -1.2, -0.4]} scale={[10, 1.1, 1]} />
            <Lightformer form="rect" intensity={3.5} color="#ffffff" position={[-7, -2, 4]} rotation={[0.2, 1.1, 0.6]} scale={[8, 2.2, 1]} />
            <Lightformer form="circle" intensity={4} color="#ffffff" position={[3, -3, 6]} scale={2.2} />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  )
}
