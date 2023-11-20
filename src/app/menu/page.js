import React from 'react'
import Image from 'next/image'
import salmon from '../../../public/images/salmon.webp'
import lobster from '../../../public/images/lobster.webp'
import Link from 'next/link'


const Menu = () => {

  
  return (
    <div>
    <div className='relative'>
      <Image
      src={salmon}
      alt='salmon'
      // have a dark overlay on the image
      className='w-full h-full object-cover object-center'
      />
{/* Have the below div on top of the image in the center */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-primary text-white'>MENU</div>
    </div>
      <div className='flex flex-col items-center justify-center space-y-5 text-primaryDark'>
      <h2>A La Carte</h2>
      <p>Available both lunch and dinner</p>
      <Link href='/'>Click for sample a la carte menu</Link>

      <h2>Nikkei Degustation Menu $75pp</h2>
      <p>Available both lunch and dinner</p>
      <Link href='/'>Sample Tasting Menu</Link>

      <h2>Tokyo Degustation Menu $105pp</h2>
      <p>Available both lunch and dinner</p>
      <Link href='/'>Sample Tasting Menu</Link>

      <p>Wine pairings are available for tasting menus</p>

      <p>* Menu is subject to change</p>

      <Image
      src={lobster}
      alt='lobster'
      // have a dark overlay on the image
      className='w-full h-full object-cover object-center'
      />
      </div>
    </div>
  )
}

export default Menu