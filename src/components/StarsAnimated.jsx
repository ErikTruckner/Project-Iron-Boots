import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'

const StarsAnimated = () => {
  const starsRef = useRef()

  const starProps = useMemo(
    () => ({
      radius: 1,
      depth: 80,
      count: 5000,
      factor: 5,
      saturation: 0,
      fade: true,
      speed: 2,
    }),
    []
  )

  useFrame(() => {
    starsRef.current.rotation.y += 0.0001
    starsRef.current.rotation.x += 0.0001
    starsRef.current.rotation.z += 0.0001
  })

  return <Stars ref={starsRef} {...starProps} />
}

export default StarsAnimated
