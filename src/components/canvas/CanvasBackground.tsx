import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { HeroBlob } from './HeroBlob'
import { ParticleField } from './ParticleField'
import { CameraRig } from './CameraRig'

export function CanvasBackground() {
  return (
    <div className="canvas-bg" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <color attach="background" args={['#05060a']} />
        <fog attach="fog" args={['#05060a', 8, 18]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 4]} intensity={1.4} color="#c9c6ff" />
        <pointLight position={[-4, -3, -2]} intensity={1.1} color="#2fd4c7" />
        <Suspense fallback={null}>
          <HeroBlob />
          <ParticleField />
          <Environment resolution={256}>
            <Lightformer intensity={2.2} color="#7c5cff" position={[0, 4, -4]} scale={[8, 3, 1]} />
            <Lightformer intensity={1.6} color="#2fd4c7" position={[-5, -2, 3]} scale={[5, 5, 1]} />
            <Lightformer intensity={1.2} color="#ffffff" position={[5, 3, 4]} scale={[5, 5, 1]} />
          </Environment>
        </Suspense>
        <CameraRig />
      </Canvas>
    </div>
  )
}
