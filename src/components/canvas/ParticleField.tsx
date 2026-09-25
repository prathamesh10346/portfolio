import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from '../../lib/scrollState'

interface ParticleFieldProps {
  count?: number
}

export function ParticleField({ count = 900 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = radius * Math.cos(phi) * 0.6
    }
    return arr
  }, [count])

  useFrame((_state, delta) => {
    const points = pointsRef.current
    if (!points) return
    points.rotation.y += delta * (0.02 + Math.abs(scrollState.velocity) * 0.0006)
    points.rotation.x = THREE.MathUtils.damp(points.rotation.x, scrollState.progress * 0.6, 2, delta)
    points.position.z = THREE.MathUtils.damp(points.position.z, -scrollState.progress * 4, 2, delta)
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#8f9bff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
