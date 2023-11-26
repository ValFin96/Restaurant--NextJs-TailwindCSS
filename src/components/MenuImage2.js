'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import lobster from '../../public/images/eltrio.webp';

const MenuImage2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', 'start end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0', '25%']);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div ref={ref} className=' relative mb-5 mt-5 '>
      <motion.div
        style={{
          y,
          scale: scaleProgress,
          zIndex: -20, 

        }}
      >
        <Image
          src={lobster}
          alt='lobster ceviche'
          loading="eager"
          className='w-full object-cover object-center 2xl:h-[300px] xl:h-full lg:h-full md:h-full sm:h-[100px] xs:h-full h-[450px]'
        />
      </motion.div>
    </div>
  );
};

export default MenuImage2;

