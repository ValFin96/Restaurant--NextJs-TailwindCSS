'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import salmon from '../../public/images/salmon.webp'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

const MenuImage1 = () => {
    let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref}>
        <motion.div className='relative -z-20'
          style={{
            y,
            scale: scaleProgress,
          }}
        >
          <Image
            src={salmon}
            alt='salmon nigiris'
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
            className='w-full object-cover object-center 2xl:h-[400px] xl:h-[300px] lg:h-[200px] md:h-[200px] sm:h-[100px] xs:h-[250px] h-[350px]'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-primary font-thin text-white'>MENU</div>
        </motion.div>
      </div>
  )
}

export default MenuImage1