import { useRef } from 'react'
import type { ComponentRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { scrollState } from '../../lib/scrollState'
import { themeColor } from '../../lib/theme'

// Where the blob parks for each section: x, y (in units of viewport half-width/height), scale.
// Order matches sectionIds: hero, about, skills, experience, projects, terminal, contact.
const STOPS: [number, number, number][] = [
  [0, 0, 1],
  [0.82, 0.1, 0.32],
  [0.82, 0.55, 0.3],
  [0.84, 0.5, 0.28],
  [0.8, 0.6, 0.26],
  [0.84, 0.0, 0.3],
  [0, 0, 1.15],
]

const out = new THREE.Vector3()

function pathAt(f: number) {
  const i = THREE.MathUtils.clamp(Math.floor(f), 0, STOPS.length - 2)
  const raw = THREE.MathUtils.clamp(f - i, 0, 1)
  const t = raw * raw * (3 - 2 * raw)
  const a = STOPS[i]
  const b = STOPS[i + 1]
  return out.set(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t)
}

export function ChromeBlob() {
  const group = useRef<THREE.Group>(null)
  const mesh = useRef<THREE.Mesh>(null)
  const ring = useRef<THREE.Mesh>(null)
  const ringMat = useRef<THREE.MeshBasicMaterial>(null)
  const material = useRef<ComponentRef<typeof MeshDistortMaterial> | null>(null)
  const light = useRef<THREE.PointLight>(null)
  const light2 = useRef<THREE.PointLight>(null)
  const viewport = useThree((s) => s.viewport)
  const pointer = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    const g = group.current
    const m = mesh.current
    if (!g || !m) return
    const t = state.clock.getElapsedTime()

    pointer.current.x += (scrollState.pointerX - pointer.current.x) * 0.06
    pointer.current.y += (scrollState.pointerY - pointer.current.y) * 0.06

    const p = pathAt(scrollState.sectionFloat)
    const narrow = viewport.width < 7
    // on narrow screens keep the blob behind the content instead of beside it
    const tx = narrow ? p.x * 0.35 * viewport.width : p.x * viewport.width * 0.5
    const ty = p.y * viewport.height * 0.5 + Math.sin(t * 0.7) * 0.12
    const base = Math.min(viewport.width, viewport.height * 1.3) * 0.26
    const pulseAge = (performance.now() - scrollState.burstAt) / 1000
    const pulse = Math.exp(-pulseAge * 3.5) * Math.sin(pulseAge * 18) * 0.12
    const ts = base * p.z * (1 + pulse)

    g.position.x = THREE.MathUtils.damp(g.position.x, tx, 3.2, delta)
    g.position.y = THREE.MathUtils.damp(g.position.y, ty, 3.2, delta)
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, ts, 4, delta))

    m.rotation.x = t * 0.14 + pointer.current.y * 0.6 + scrollState.progress * 5
    m.rotation.y = t * 0.2 + pointer.current.x * 0.8 + scrollState.progress * 7

    if (material.current) {
      const target = 0.32 + Math.min(Math.abs(scrollState.velocity) * 0.012, 0.4) + Math.max(pulse, 0) * 2
      material.current.distort = THREE.MathUtils.damp(material.current.distort, target, 5, delta)
    }

    if (ring.current && ringMat.current) {
      ring.current.rotation.x = 1.1 + Math.sin(t * 0.3) * 0.2 + pointer.current.y * 0.3
      ring.current.rotation.y = t * 0.35 + pointer.current.x * 0.4
      ringMat.current.color.copy(themeColor)
    }
    if (light.current) light.current.color.copy(themeColor)
    if (light2.current) light2.current.color.copy(themeColor)
  })

  return (
    <group ref={group}>
      <Icosahedron ref={mesh} args={[1, 40]}>
        <MeshDistortMaterial
          ref={material}
          color="#ffffff"
          metalness={1}
          roughness={0.08}
          distort={0.32}
          speed={1.8}
          envMapIntensity={1.3}
        />
      </Icosahedron>
      <mesh ref={ring}>
        <torusGeometry args={[1.55, 0.012, 8, 220]} />
        <meshBasicMaterial ref={ringMat} toneMapped={false} />
      </mesh>
      <pointLight ref={light} position={[2.5, 1.5, 3]} intensity={30} distance={12} />
      <pointLight ref={light2} position={[-2.5, -2, 2]} intensity={14} distance={10} />
    </group>
  )
}
