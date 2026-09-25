import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'
import { scrollState } from '../../lib/scrollState'

const PALETTE = ['#7c5cff', '#2fd4c7', '#ff5c7c', '#ffb454', '#7c5cff'].map((c) => new THREE.Color(c))

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}

export function HeroBlob() {
  const meshRef = useRef<THREE.Mesh>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const current = useMemo(() => new THREE.Color(), [])

  useFrame((state, delta) => {
    const mesh = meshRef.current
    if (!mesh) return

    pointer.current.x += (scrollState.pointerX - pointer.current.x) * 0.04
    pointer.current.y += (scrollState.pointerY - pointer.current.y) * 0.04

    const t = state.clock.getElapsedTime()
    const scrollSpin = scrollState.progress * Math.PI * 4

    // 1 while parked in the hero, settles low once the reader moves into the content
    const focus = 1 - smoothstep(0.05, 0.17, scrollState.progress)

    mesh.rotation.x = t * 0.12 + pointer.current.y * 0.5 + scrollSpin * 0.15
    mesh.rotation.y = t * 0.18 + pointer.current.x * 0.6 + scrollSpin * 0.25

    const parkedX = 2.5 + pointer.current.x * 0.15
    const targetX = THREE.MathUtils.lerp(parkedX, pointer.current.x * 0.35, focus)
    const targetY = Math.sin(t * 0.5) * 0.18 - scrollState.progress * 0.6

    mesh.position.x = THREE.MathUtils.damp(mesh.position.x, targetX, 3, delta)
    mesh.position.y = THREE.MathUtils.damp(mesh.position.y, targetY, 3, delta)

    const velocityBoost = Math.min(Math.abs(scrollState.velocity) * 0.02, 0.25)
    const targetScale = THREE.MathUtils.lerp(0.5, 1 + velocityBoost, focus)
    mesh.scale.setScalar(THREE.MathUtils.damp(mesh.scale.x, targetScale, 4, delta))

    if (materialRef.current) {
      const colorPos = (scrollState.progress * (PALETTE.length - 1)) % (PALETTE.length - 1)
      const idx = Math.floor(colorPos)
      const frac = colorPos - idx
      current.copy(PALETTE[idx]).lerp(PALETTE[idx + 1] ?? PALETTE[0], frac)
      materialRef.current.color.lerp(current, 0.08)
      materialRef.current.distort = THREE.MathUtils.damp(
        materialRef.current.distort,
        0.35 + Math.min(Math.abs(scrollState.velocity) * 0.01, 0.35),
        4,
        delta,
      )
      const targetOpacity = THREE.MathUtils.lerp(0.4, 0.92, focus)
      materialRef.current.opacity = THREE.MathUtils.damp(materialRef.current.opacity, targetOpacity, 4, delta)
    }
  })

  return (
    <Icosahedron ref={meshRef} args={[1.5, 8]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#7c5cff"
        roughness={0.15}
        metalness={0.4}
        distort={0.35}
        speed={1.6}
        envMapIntensity={1.1}
        transparent
        opacity={0.92}
      />
    </Icosahedron>
  )
}
