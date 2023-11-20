import React from 'react'
import Image from 'next/image'
import lobster from '../../../public/images/lobster.webp'
import Link from 'next/link'
import MenuImage1 from '@/components/MenuImage1'


const Menu = () => {

  return (
    <div>
      <MenuImage1 />
      <div className='flex flex-col items-center justify-center w-full py-5 text-primaryDark bg-primary'>
        <div className='mb-5 text-center'>
        <h2 className='text-lg mb-2'>A La Carte</h2>
        <p>Available both lunch and dinner</p>
        <Link href='/' className='underline underline-offset-2'>Click for sample a la carte menu</Link>
        </div>

        <div className='mb-5 text-center'>
        <h2 className='text-lg mb-2'>Pre-theatre menu $75pp</h2>
        <p>Available between 5-6pm</p>
        <Link href='/' className='underline underline-offset-2'>Sample Tasting Menu</Link>
        </div>

        <div className='mb-5 text-center'>
        <h2 className='text-lg mb-2'>Nikkei Degustation Menu $75pp</h2>
        <p>Available both lunch and dinner</p>
        <Link href='/' className='underline underline-offset-2'>Sample Tasting Menu</Link>
        </div>

        <div className='mb-5 text-center'>
        <h2 className='text-lg mb-2'>Tokyo Degustation Menu $105pp</h2>
        <p>Available both lunch and dinner</p>
        <Link href='/' className='underline underline-offset-2'>Sample Tasting Menu</Link>
        </div>

        <p className='mb-5 text-center'>Wine pairings are available for tasting menus</p>

        <p className='mb-5 text-center text-sm'>* Menu is subject to change</p>
        <div
        >
          <Image
            src={lobster}
            alt='lobster'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </div>
  )
}

export default Menu