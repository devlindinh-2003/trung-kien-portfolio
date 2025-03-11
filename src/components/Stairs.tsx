import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
    transition: { duration: 0.5 },
  },
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          className='h-full w-full relative bg-white'
          key={index}
          variants={stairAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 0.3,
            delay: index * 0.07,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};

export default Stairs;
