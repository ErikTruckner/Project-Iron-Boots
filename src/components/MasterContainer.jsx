import React, { useState, useRef, Suspense, useEffect } from 'react'
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
import { Perf } from 'r3f-perf'

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '24px',
      }}>
      <h1>The Robots are Working...</h1>
    </div>
  )
}

const MasterContainer = () => {
  // Loading Screen State
  const [isLoaded, setIsLoaded] = useState(false)

  const canvasRef = useRef()

  const handleCreated = () => {
    setIsLoaded(true)
  }

  //
  return (
    <>
      {!isLoaded && <LoadingScreen />}
      <Canvas
        id='canvas'
        ref={canvasRef}
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={handleCreated}
        gl={{ alpha: false }}>
        {/* <Perf /> */}
        <StarsAnimated />
        <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight position={[-20, 50, 10]} intensity={1} color={0x61dbfb} />
        <Suspense fallback={null}>
          <ReactLogo />
          <EarthModel />
        </Suspense>
      </Canvas>
      <Loader />
      {isLoaded && (
        <>
          <Hero isLoaded={isLoaded} />
          <About />
          <SwiperProjects />
          <WorkExperience />
          <Contact />
        </>
      )}
    </>
  )
}

export default MasterContainer
