import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Autoplay } from 'swiper'
import { useInView } from 'react-intersection-observer'

import 'swiper/css'
import 'swiper/css/effect-cube'

import 'swiper/css/autoplay'

const youTubeLink = (
  <span>
    {' '}
    <a
      href='https://www.youtube.com/@webddd/videos'
      target='_blank'
      className='about-links'>
      YouTube Channel
    </a>
  </span>
)

const udemyLink = (
  <span>
    {' '}
    <a
      href='https://www.udemy.com/user/erik-truckner/'
      target='_blank'
      className='about-links'>
      Udemy Courses
    </a>
  </span>
)

const slides = [
  {
    id: 0,
    jobTitle: 'Full Stack 3D Developer',
    companyName: 'AbsurDesign',
    datesWorked: ' 2022 - 2023',
    jobDescription: (
      <>
        Planning, designing, creating, and teaching tutorial courses on
        Three.js, React Three Fiber, Unity, & Blender. See them here on my
        {youTubeLink} and {udemyLink}.
      </>
    ),
  },
  {
    id: 1,
    jobTitle: 'WordPress Developer',
    companyName: 'Dharmacakra',
    datesWorked: ' 2021 - 2023',
    jobDescription:
      'Design and develope website using WordPress. Implement responsive design and ensure browser compatibility. Content creation and blog article writing.',
  },
  {
    id: 2,
    jobTitle: 'Freelance Contractor',
    companyName: "Erik's Lawn Service",
    datesWorked: ' 2007 - 2023 ',
    jobDescription:
      'Create, manage, and implement scheduling. Administrative work and billing. Establishing client contracts. Care for properties according to contracts',
  },
]

const WorkExperience = () => {
  const Card = ({ jobTitle, companyName, datesWorked, jobDescription }) => {
    return (
      <div className='border-2 w-[98%] glass-background rounded-lg  flex flex-col  glowing-shadow'>
        <div className='flex flex-col justify-start items-center  mx-1 my-5'>
          <h2 className='text-white text-lg text-center mb-5'>{jobTitle}</h2>
          <h3 className='text-white text-lg text-center mb-5'>{companyName}</h3>
          <p className='text-white text-center mb-5'>{datesWorked}</p>
          <p className='text-white text-center mb-5 border-t-2 pt-5'>
            {jobDescription}
          </p>
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
    <section className='relative w-screen h-screen overflow-hidden '>
      <div className='w-full h-full flex flex-col justify-center items-center text-white z-10 my-5'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center mx-1'>
          Work
          <span className=' light-blue-text font-semibold '> Exp</span>
          erience
        </h1>
        <p className='mt-5'>Swipe or drag the items</p>
        <div ref={ref} className='w-[90%] h-full lg:w-1/4 my-10'>
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={
              isIntersecting
                ? { delay: 6000, disableOnInteraction: false }
                : false
            } // Only enable autoplay if component is in view
            speed={2000}
            loop={true}
            effect={'cube'}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Autoplay]}
            className='mySwiper'>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  jobTitle={slide.jobTitle}
                  companyName={slide.companyName}
                  datesWorked={slide.datesWorked}
                  jobDescription={slide.jobDescription}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
