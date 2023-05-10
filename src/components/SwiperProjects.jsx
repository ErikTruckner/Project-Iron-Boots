import { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper'
import { useInView } from 'react-intersection-observer'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// you're naming it as variable on the import
import ogTN from '../assets/ogPortThumb.jpg'
import reactExpense from '../assets/reactExpense.png'
import reactGoals from '../assets/reactGoals.png'
import reactThreeCars from '../assets/reactThreeCars.png'
import reactToDo from '../assets/reactToDo.png'
import VueThreeSplash from '../assets/VueThreeSplash.png'
import previousPort from '../assets/previousPort.jpg'
import solarSystem from '../assets/solarSystemTN.jpg'
import linkVerseTN from '../assets/linkVerseTN.jpg'

const slides = [
  {
    id: 0,
    imageSrc: solarSystem,
    projectName: 'Solar System Experience',
    projectLink: 'https://solar-spear.netlify.app/',
    projectDescription:
      'A solar system built with Three.js and React Three Fiber. Users can explore and change camera angles with the mouse. A work in progress with continously expanding features.',
    githubLink: 'https://github.com/ErikTruckner/Project-Solar-Spear',
  },
  {
    id: 1,
    imageSrc: linkVerseTN,
    projectName: '3D LinkTree Clone',
    projectLink: 'https://3d-linktree.netlify.app/',
    projectDescription:
      'A 3D LinkTree clone built with Three.js, React Three Fiber, & Framer Motion. A work in progress with continously expanding features.',
    githubLink: 'https://github.com/ErikTruckner/Project-Linktree',
  },
  {
    id: 2,
    imageSrc: VueThreeSplash,
    projectName: 'Three.js Splash Page',
    projectLink: 'https://portfoliosplash.netlify.app/',
    projectDescription:
      'Created using Nuxt.js and Three.js: an interactive WebGL splash page utilizing camera position animations via GreenSock Animation Platform (GSAP). ',
    githubLink: 'https://github.com/ErikTruckner/VueTHREEjsPortfolio',
  },
  {
    id: 3,
    imageSrc: previousPort,
    projectName: 'React Three Fiber Portfolio Variation',
    projectLink: 'https://eriktrucknerportfolio.netlify.app/',
    projectDescription:
      'Built with React Three Fiber, React Router, and Framer Motion. A different variation of what a 3D portfolio can be. ',
    githubLink: 'https://github.com/ErikTruckner/Project-Sword-Edge',
  },
  {
    id: 4,
    imageSrc: reactExpense,
    projectName: 'React Expense Tracker',
    projectLink: 'https://eriks-react-expense-tracker.netlify.app/',
    projectDescription:
      'Web based platform that provides users with a visual graph of their spending over time. Built with React and custom CSS.',
    githubLink: 'https://github.com/ErikTruckner/REACT-Expense-Tracker',
  },
  {
    id: 5,
    imageSrc: reactThreeCars,
    projectName: 'React Three Fiber Car Shop',
    projectLink: 'https://carcolorshop.netlify.app/',
    projectDescription:
      'React Three Fiber project featuring user ability to manipulate camera position and colors of imported glTF models using HTML buttons. iOS users may need to enable WebGL in their browser. This app is rather heavy as it utilizes physics, multiple lights sources, shadows, and multiple glTF objects; some devices may suffer from performance issues.',
    githubLink: 'https://github.com/ErikTruckner/cars',
  },
  {
    id: 6,
    imageSrc: reactToDo,
    projectName: 'React To Do List',
    projectLink: 'https://eriks-react-todo-list.netlify.app/',
    projectDescription:
      'A to do list app created using React and custom Bootstrap. Implementing CRUD (Create, Read, Update, Delete) functionality with user populated data.',
    githubLink: 'https://github.com/ErikTruckner/react-todo-list',
  },
  {
    id: 7,
    imageSrc: ogTN,
    projectName: 'Vanilla Three.js Portfolio',
    projectLink: 'https://eriks-react-todo-list.netlify.app/',
    projectDescription:
      'A simple Vanilla JavaScript Portfolio utilizing Three.js and custom animated glTF created in Blender',
    githubLink: 'https://github.com/ErikTruckner/portfolio3',
  },
  {
    id: 8,
    imageSrc: reactGoals,
    projectName: 'React Daily Goals App',
    projectLink: 'https://eriks-daily-goals-app.netlify.app/',
    projectDescription:
      'Created using React. A simple daily goal app utilizing Create and Delete methods, as well as changing user input field styles based on users actions.',
    githubLink: 'https://github.com/ErikTruckner/REACT-goal-list',
  },
]

const SwiperProjects = () => {
  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className='border-4 w-full glass-background rounded-lg overflow-hidden flex flex-col'>
        <div className='w-full '>
          <a href={projectLink} target='_blank' className='block w-full h-full'>
            <img
              src={imageSrc}
              alt={projectName}
              className='w-full  object-cover cursor-pointer flex-shrink'
            />
          </a>
        </div>
        <div className='flex flex-col justify-start items-center h-[40%] mx-1 my-1'>
          <h2 className='text-white text-center font-bold my-3'>
            {projectName}
          </h2>
          <p className='text-white text-center mb-5'>{projectDescription}</p>
          <div className='flex justify-center mb-1'>
            <a href={githubLink} target='_blank'>
              <img
                src='https://img.icons8.com/material-outlined/24/61dbfb/github.png'
                alt='github link'
                className='w-10 h-10 hover-glowing-shadow-and-scale rounded-full'
              />
            </a>
          </div>
        </div>
      </div>
    )
  }

  // INTERSECTION OBSERVER TIME DELAY
  const [isIntersecting, setIsIntersecting] = useState(false)
  const swiperRef = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.5, // Intersection threshold for triggering the observer
    triggerOnce: true, // Only trigger once
    onChange: (isVisible) => setIsIntersecting(isVisible),
  })

  useEffect(() => {
    // If the Swiper component is in view, and the intersection state is true,
    // then start the Swiper autoplay feature.
    if (inView && isIntersecting) {
      swiperRef.current.swiper.autoplay.start()
    }
  }, [inView, isIntersecting])

  return (
    <section className=' relative w-screen h-full  '>
      <div className='w-full h-screen flex flex-col justify-start items-center text-white z-10'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center'>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>
          jects
        </h1>
        <p className='mt-5'>Swipe or drag the items</p>
        <div
          ref={ref}
          className='w-full h-full sm:w-3/4 lg:w-1/2 xl:w-1/3 my-10 '>
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            centeredSlides={true}
            // Responsive breakpoints
            breakpoints={{
              // when window width is >=
              1: {
                slidesPerView: 1.3,
                spaceBetween: 120,
              },
              400: {
                slidesPerView: 1.3,
                spaceBetween: 200,
              },
              1024: {
                slidesPerView: 1.3,
                spaceBetween: 175,
              },
              1280: {
                slidesPerView: 1.5,
                spaceBetween: 150,
              },
              1580: {
                slidesPerView: 1.5,
                spaceBetween: 175,
              },
            }}
            // spaceBetween={150}
            // slidesPerView={1.5}
            autoplay={
              isIntersecting
                ? { delay: 6000, disableOnInteraction: false }
                : false
            } // Only enable autoplay if component is in view
            speed={1500}
            loop={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 3,
              slideShadows: true,
            }}
            autoHeight={true}
            resizeObserver={true}
            modules={[EffectCoverflow, Autoplay]}>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  imageSrc={slide.imageSrc}
                  projectName={slide.projectName}
                  projectLink={slide.projectLink}
                  projectDescription={slide.projectDescription}
                  githubLink={slide.githubLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SwiperProjects
