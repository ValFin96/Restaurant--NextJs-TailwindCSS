'use client'

import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import furaiCrab from '../../public/images/furai-crab.webp'
import interior from '../../public/images/interior.webp'
import lobsterCeviche from '../../public/images/lobster-ceviche.webp'
import maki from '../../public/images/maki.webp'
import mural from '../../public/images/mural.webp'
import nigiris from '../../public/images/nigiris.webp'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const images = [maki, nigiris, interior, furaiCrab, mural, lobsterCeviche]
  const [currentImage, setCurrentImage] = useState(0)

  //loop through all images in the array for a slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
    }, 6000)

    setIsLoaded(true)
    return () => clearInterval(interval)
  }, [currentImage])

  return (
    <>
      <Head>
        <link rel="preload" href={images[currentImage].src} as="image" />
      </Head>
      <div
        className="bg-no-repeat bg-cover bg-center z-10 relative"
        style={{
          minHeight: '100vh',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 2s ease-in-out'
        }}>
        <Image
          src={images[currentImage].src}
          alt="Lima Peruvian Japanese Restaurant in Dawes Point"
          fill={true}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          quality={100}
          loading="eager"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </>
  )
}

export default Hero
