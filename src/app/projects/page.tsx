'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Kohi Neko - Coffee Cat',
    description:
      'A Coffee Cat Cafe website allows users to easily register and book their visits by selecting a preferred date and time.',
    stack: [
      { name: 'React JS' },
      { name: 'Tailwind CSS' },
      { name: 'Tanstack Query' },
      { name: 'MUI package' },
    ],
    image: '/koheneko.jpg',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'mobile developer',
    title: 'VFoody - Delivery App',
    description:
      'A platform to connect local food and beverage retailers, and restaurants with Vinhome residents.',
    stack: [
      { name: 'React Native' },
      { name: 'Nativewind CSS' },
      { name: 'Reduxt Toolkit' },
      { name: 'React Native paper' },
    ],
    image: '/vfoody.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend & mobile',
    title: 'Garment Warehouse System',
    description:
      'A platform focused on importing/exporting of materials and products in garment warehouses and quality control.',
    stack: [
      { name: 'React JS' },
      { name: 'React Native' },
      { name: 'Tailwind CSS' },
      { name: 'React Native Paper' },
      { name: 'Tanstack query' },
    ],
    image: '/garmentwms.png',
    live: '',
    github: '',
  },
];

export default function ProjectsPage() {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imagesLoaded, setImagesLoaded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  // Handle initial animation completion
  useEffect(() => {
    // Set a timeout to ensure animations complete even if images are already loaded
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setImagesLoaded(true);
    }, 1000); // Ensure this is longer than your longest animation

    return () => clearTimeout(timer);
  }, []);

  // Handle slide change
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = (swiper: any) => {
    setIsAnimating(true);
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);

    // Update project with animation
    setTimeout(() => {
      setProject(projects[currentIndex]);
      setIsAnimating(false);
    }, 300);
  };

  // Handle manual navigation via dots
  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setActiveIndex(index);

    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }

    setTimeout(() => {
      setProject(projects[index]);
      setIsAnimating(false);
    }, 300);
  };

  // Handle navigation with arrows
  const goToNextSlide = () => {
    if (swiperRef.current && activeIndex < projects.length - 1) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && activeIndex > 0) {
      swiperRef.current.slidePrev();
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='min-h-screen  px-4 sm:px-6 md:py-16 lg:py-20 flex items-center bg-black py-32'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          {/* Project Details */}
          <div className='w-full lg:w-1/2 flex flex-col justify-between order-2 lg:order-none'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={project.num}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className='space-y-4 md:space-y-6'
              >
                {/* Project Number */}
                <motion.div
                  custom={0}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  className='text-6xl sm:text-7xl md:text-8xl font-extrabold text-gray-700/50 leading-none'
                >
                  {project.num}
                </motion.div>

                {/* Project Category */}
                <motion.h2
                  custom={1}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  className='text-3xl sm:text-4xl md:text-5xl font-bold text-white capitalize mt-2'
                >
                  <span className='text-green-500'>{project.category}</span>{' '}
                  project
                </motion.h2>

                {/* Project Title */}
                <motion.h3
                  custom={2}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  className='text-xl sm:text-2xl font-semibold text-white/90'
                >
                  {project.title}
                </motion.h3>

                {/* Project Description */}
                <motion.p
                  custom={3}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  className='text-white/60 text-base sm:text-lg max-w-2xl'
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  custom={4}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  className='mt-4'
                >
                  <h4 className='text-white/80 text-sm uppercase tracking-wider mb-2'>
                    Technologies
                  </h4>
                  <ul className='flex flex-wrap gap-3'>
                    {project.stack.map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index + 5}
                        variants={fadeInUp}
                        initial='hidden'
                        animate='visible'
                        className='text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-sm'
                      >
                        {item.name}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Project Links */}
                <motion.div
                  custom={8}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='visible'
                  className='flex gap-4 mt-6'
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-white/80 hover:text-green-500 transition-colors'
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-white/80 hover:text-green-500 transition-colors'
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className='hidden lg:flex gap-2 mt-8'>
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-green-500 w-8' : 'bg-white/20'
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Project Images */}
          <div className='w-full lg:w-1/2 order-1 lg:order-none'>
            <div className='relative'>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                effect='fade'
                modules={[EffectFade, Navigation]}
                className='w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]'
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  // Initialize swiper to the active index
                  if (activeIndex !== 0) {
                    swiper.slideTo(activeIndex, 0);
                  }
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className='w-full h-full'>
                    <div className='relative w-full h-full overflow-hidden rounded-lg group'>
                      {/* Loading overlay */}
                      {isAnimating && (
                        <div className='absolute inset-0 bg-black/50 z-20 flex items-center justify-center'>
                          <div className='w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all z-10'></div>

                      {/* Image */}
                      <div className='relative w-full h-full'>
                        <AnimatePresence mode='wait'>
                          <motion.div
                            key={project.image}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              transition: {
                                duration: 0.7,
                                ease: [0.43, 0.13, 0.23, 0.96],
                              },
                            }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className='w-full h-full'
                          >
                            <Image
                              src={project.image || '/placeholder.svg'}
                              fill
                              className='object-cover'
                              alt={project.title}
                              priority={index === 0}
                              sizes='(max-width: 1024px) 100vw, 50vw'
                              onLoad={() => {
                                if (index === activeIndex) {
                                  setImagesLoaded(true);
                                }
                              }}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Project Number Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.3, duration: 0.5 },
                        }}
                        className='absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-20'
                      >
                        Project {project.num}
                      </motion.div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <div className='absolute inset-0 flex items-center justify-between z-30 pointer-events-none px-4'>
                {/* Previous Arrow */}
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: activeIndex > 0 ? 1 : 0.3,
                    x: 0,
                    scale: activeIndex > 0 ? 1 : 0.9,
                  }}
                  whileHover={activeIndex > 0 ? { scale: 1.1 } : {}}
                  whileTap={activeIndex > 0 ? { scale: 0.9 } : {}}
                  onClick={goToPrevSlide}
                  disabled={activeIndex === 0}
                  className={`w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center pointer-events-auto
                    ${
                      activeIndex === 0
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer hover:bg-green-500/20 border border-green-500/30'
                    }`}
                  aria-label='Previous project'
                >
                  <ChevronLeft
                    className={`w-6 h-6 ${
                      activeIndex === 0 ? 'text-white/30' : 'text-white'
                    }`}
                  />
                </motion.button>

                {/* Next Arrow */}
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: activeIndex < projects.length - 1 ? 1 : 0.3,
                    x: 0,
                    scale: activeIndex < projects.length - 1 ? 1 : 0.9,
                  }}
                  whileHover={
                    activeIndex < projects.length - 1 ? { scale: 1.1 } : {}
                  }
                  whileTap={
                    activeIndex < projects.length - 1 ? { scale: 0.9 } : {}
                  }
                  onClick={goToNextSlide}
                  disabled={activeIndex === projects.length - 1}
                  className={`w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center pointer-events-auto
                    ${
                      activeIndex === projects.length - 1
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer hover:bg-green-500/20 border border-green-500/30'
                    }`}
                  aria-label='Next project'
                >
                  <ChevronRight
                    className={`w-6 h-6 ${
                      activeIndex === projects.length - 1
                        ? 'text-white/30'
                        : 'text-white'
                    }`}
                  />
                </motion.button>
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className='flex lg:hidden justify-center gap-2 mt-4'>
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index ? 'bg-green-500 w-6' : 'bg-white/20'
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
