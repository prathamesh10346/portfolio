import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from '../../lib/scrollState'

export function CameraRig() {
  const { camera } = useThree()

  useFrame((_, delta) => {
    const targetX = scrollState.pointerX * 0.6
    const targetY = scrollState.pointerY * 0.3 + scrollState.progress * 1.4
    const targetZ = 6 - scrollState.progress * 1.5

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 3, delta)
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 3, delta)
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 3, delta)
    camera.lookAt(0, -scrollState.progress * 0.6, 0)
  })

  return null
}
