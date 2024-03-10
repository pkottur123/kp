'use client';

import React from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import StarsCanvas from '../main/StarBackground';
import classes from './HeroContext.module.css';

const HeroContent = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Welcome to my portfolio!</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`flex flex-row gap-6 mt-6 text-6xl font-bold text-white max-w-max w-auto h-auto ${classes.greet}`}
        >
          <motion.span
            animate={{
              rotate: [0, -15, 0], // Sequence of rotations to mimic waving
              // y: [0, -10, 0], // Sequence of vertical movements
              transition: { duration: 1, repeat: 1, easings: easeInOut },
            }}
            className={classes.hello}
          >
            👋
          </motion.span>
          <span>
            <motion.span
              className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${classes.name}`}
              // animate={{ transition: { duration: 2, repeat: 1, ease: easeIn } }}
            >
              {' '}
              Hi, I'm Pooya{' '}
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          a Full-Stack Engineer with experience in Website, Mobile, and Software
          development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
          href='mailto:jb.pooya@gmail.com'
        >
          Contact me!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(1)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image
          src='/mainIconsdark.svg'
          alt='work icons'
          height={550}
          width={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
