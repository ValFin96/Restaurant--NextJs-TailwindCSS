'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'

import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

const HeroSlider = () => {
  const slideImages = [
    'furai-crab.webp',
    'interior.webp',
    'lobster-ceviche.webp',
    'maki.webp',
    'mural.webp',
    'nigiris.webp'
  ]

  return (
    <section className="h-screen w-full">
      <Swiper
        effect={'fade'}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: true
        }}
        modules={[Autoplay, EffectFade]}
        className="h-screen w-full">
        {slideImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/images/${slide}`}
              fill={true}
              quality={100}
              loading="eager"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
              alt="Lima Peruvian Japanese Restaurant in Dawes Point"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSlider
