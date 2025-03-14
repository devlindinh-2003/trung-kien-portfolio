'use client';

import { TextAnimate } from '@/components/magicui/text-animate';
import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import { Button } from '@/components/ui/button';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  // Animation variants
  const fadeIn = (direction: string, delay: number) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  return (
    <section className='min-h-screen flex items-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-black'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-0 items-center'>
          {/* Text Content */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate='show'
            className='text-center xl:text-left order-2 xl:order-1 max-w-2xl mx-auto xl:mx-0'
          >
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='inline-block mb-6 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full'
            >
              <span className='text-green-500 font-medium'>
                Software Engineer
              </span>
            </motion.div>

            {/* Name and Title */}
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight'>
              Hello, I&apos;m <br />
              <TextAnimate
                delay={1}
                animation='scaleUp'
                by='character'
                once
                className='text-4xl sm:text-5xl md:text-6xl font-bold text-green-500'
              >
                Trung Kien
              </TextAnimate>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className='text-lg text-white/70 mb-8 max-w-lg'
            >
              I&apos;m a Frontend and Mobile Developer with experience in
              building websites and mobile applications. I specialize in
              creating responsive, user-friendly interfaces with modern
              JavaScript frameworks.
            </motion.p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row items-center gap-5 mb-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <Button className='bg-green-600 hover:bg-green-500 text-white w-full sm:w-auto px-6 py-6 rounded-lg transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-500/30'>
                  <a
                    href='/cv.pdf'
                    className='flex items-center gap-2'
                    download
                  >
                    <span>Download CV</span>
                    <FiDownload className='animate-bounce' />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <Link href='/projects'>
                  <Button
                    variant='outline'
                    className='cursor-pointer bg-white text-black hover:bg-gray-100 w-full sm:w-auto px-6 py-6 rounded-lg transition-all duration-300 font-medium border-none'
                  >
                    <span>View Projects</span>
                    <FiArrowRight className='ml-2 animate-bounce' />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className='mb-8 xl:mb-0'
            >
              <p className='text-white/50 mb-3 text-sm'>Connect with me</p>
              <Socials
                containerStyles='flex gap-4 justify-center xl:justify-start'
                iconStyles='w-10 h-10 border border-green-600/30 rounded-full flex justify-center items-center text-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300'
              />
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            animate='show'
            className='order-1 xl:order-2 flex justify-center xl:justify-end'
          >
            {/* Decorative elements */}
            <div className='relative'>
              {/* Background glow */}
              <div className='absolute -inset-1 rounded-full bg-green-500/20 blur-3xl opacity-30 -z-10'></div>

              {/* Decorative circles */}
              <div className='absolute -top-6 -left-6 w-24 h-24 border border-green-500/20 rounded-full'></div>
              <div className='absolute -bottom-6 -right-6 w-32 h-32 border border-green-500/20 rounded-full'></div>

              {/* Photo component with frame */}
              <div className='relative z-10 border-4 border-green-500/20 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-black to-gray-900'>
                <Photo />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative element - bottom */}
        <div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-500/5 to-transparent -z-10'></div>
      </div>
    </section>
  );
}
