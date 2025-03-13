'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ripple } from './magicui/ripple';

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
      >
        <div className='w-[298px] h-[298px] xl:w-[550px] xl:h-[600px] relative'>
          <Image
            src='/profileImg.png'
            priority
            quality={100}
            alt='Trung Kien memoji'
            style={{
              objectFit: 'contain',
              objectPosition: 'center right',
            }}
            fill
            sizes='(max-width: 768px) 298px, 550px'
          />
          <Ripple
            mainCircleSize={250}
            numCircles={10}
            className='hidden xl:flex'
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
