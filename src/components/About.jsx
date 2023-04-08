import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import '../index.css'

const About = () => {
  const aboutVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <section className='relative w-screen h-screen mt-20'>
      {/* <AboutCanvas /> */}
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={aboutVariants}
        className='absolute  left-[0%]  ml-3 mr-3 md:left-[10%] xl:left-[25%] md:w-1/2 xl:w-1/3  text-white py-3  glowing-shadow border rounded-lg text-center glass-background'>
        <h1 className='text-5xl lg:text-7xl fredoka-font'>
          About
          <span className=' light-blue-text font-semibold '> Me</span>
        </h1>
        <p className='mt-8 mx-3 text-base font-serif'>
          As a creative software developer, I possess technical expertise in
          utilizing frontend JavaScript technologies such as React, Next, Vue,
          Nuxt, and Three.js to deliver reliable and impactful visual solutions.
          To store necessary information I utilize Node.js and Express.js
          combined with the approriate database for the porject, either SQL or
          noSQL. <br />
          I'm committed to creating exceptional user experiences through good
          design and interface, incorporating emerging technologies like 3D to
          push the boundaries of frontend visual styles and enhance user
          engagement. My dedication to continuous improvement and learning
          enables me to deliver innovative solutions that prioritize quality and
          reliability. Overall, I strive to deliver software solutions that
          leave a lasting impact and exceed expectations.
        </p>
      </motion.div>
      <div className=' absolute flex flex-col  bottom-[20%] left-[50%] translate-x-[-50%]'>
        <div className='slide-bottom'>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
        </div>
      </div>
    </section>
  )
}

export default About
