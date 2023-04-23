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
          As a Full Stack 3D Developer I possess technical expertise in
          utilizing frontend JavaScript technologies such as React Three Fiber,
          Three.js, React, Next, Vue, and Nuxt to deliver impactful visual
          solutions. I create exceptional user experiences through creative
          design and intuitive interfaces, incorporating emerging technologies
          to push the boundaries of frontend visuals and enhance user experience
          and engagement. To store necessary information I utilize Node.js and
          Express.js combined with the approriate database language for the
          project, being either SQL or noSQL.
        </p>
      </motion.div>
      <div className=' absolute flex flex-col  bottom-[13%] left-[50%] translate-x-[-50%]'>
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
