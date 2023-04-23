import React, { useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
//
import StarsAnimated from './StarsAnimated'
//
import About from './About'
import SwiperProjects from './SwiperProjects'
import Hero from './Hero'
import ReactLogo from './canvas/ReactLogo'
import WorkExperience from './WorkExperience'
import Contact from './Contact'
import EarthModel from './canvas/EarthModel'
import { Loader } from '@react-three/drei'

const MasterContainer = () => {
  // Loading Screen State
  const [isLoaded, setIsLoaded] = useState(false)

  window.onload = () => {
    setIsLoaded(true)
  }
  // Canvas BG color
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000', 1)
  }

  const styles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    inner: {
      position: 'relative',
      width: 60,
      height: 60,
    },
    bar: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '6px solid #fff',
      borderTopColor: '#ff6600',
      animation: '$spin 1s linear infinite',
    },
    data: {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontSize: '1.2em',
      fontFamily: 'sans-serif',
    },
    '@keyframes spin': {
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  }

  //
  return (
    <>
      <Canvas
        id='canvas'
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={bgColor}>
        <StarsAnimated />
        {/* We need a light to see our gltf model */}

        <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight position={(-20, 50, 10)} intensity={1} color={0x61dbfb} />
        <Suspense fallback={null}>
          {/* React Model */}
          <ReactLogo />

          {/* Earth Model */}
          <EarthModel />
        </Suspense>
      </Canvas>
      <Loader />
      <Hero isLoaded={isLoaded} />
      <About />
      <SwiperProjects />
      <WorkExperience />
      <Contact />
    </>
  )
}

export default MasterContainer
