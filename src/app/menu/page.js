import React from 'react'
import Image from 'next/image'
import lobster from '../../../public/images/lobster.webp'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const MenuImage1 = dynamic(()=> import ('@/components/MenuImage1'),
{
loading:()=><p>…Loading</p>
})
const MenuImage2 = dynamic(()=> import ('@/components/MenuImage2'),
{
  loading:()=><p>…Loading</p>,ssr:false
  })
const BookNow = dynamic(()=> import ('@/components/BookNow'),
{
  loading:()=><p>…Loading</p>
  })

// const Header = dynamic(()=>import("../components/header"))

const Menu = () => {

  return (
    <div className='overflow-hidden'>
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

        <p className=' text-center text-sm'>* Menu is subject to change</p>
        <BookNow/>
      </div>
      <MenuImage2 />
    </div>
  )
}

export default Menu