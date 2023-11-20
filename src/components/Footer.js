'use client'

import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from "react-icons/fi";
import limaBlack from '../../public/images/Lima-Logo-Black.webp';
import Image from 'next/image';

const Footer = () => {
    function handleClickInsta() {
        window.open('https://www.instagram.com/limanikkei_sydney/');
    }

    function handleClickFb() {
        window.open('https://www.facebook.com/limanikkei.sydney');
    }

    return (
        <footer>
            <div className='flex items-center justify-center'>
                <hr className=' w-[90vw] border-t mt-4 opacity-20 border-primaryDark' />
            </div>
            <div className='p-8 text-gray-200'>

            <Link href='/' >
            <Image src={limaBlack} alt='Lima Peruvian Japanese Restaurant in Dawes Point' width={200} height={200} priority={true} className='sm:w-[170px] mx-auto mb-[2rem]' />
        </Link>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-3 xs:grid-cols-1 lg:grid-cols-3 gap-3 overflow-hidden text-primaryDark'>
                        <div className='mb-5'>
                            <h4 className='text-lg font-bold mb-3 '>Quick Links</h4>
                            <ul className='m-0 p-0'>
                                <li className='flex items-center'>
                                    <FiChevronRight className='mr-2' />
                                    <Link href='/menu'>Menu</Link>
                                </li>
                                <li className='flex items-center'>
                                    <FiChevronRight className='mr-2' />
                                    <Link href='/drinks'>Drinks</Link>
                                </li>
                                <li className='flex items-center'>
                                    <FiChevronRight className='mr-2' />
                                    <Link href='/functions'>Functions</Link>
                                </li>
                                <li className='flex items-center'>
                                    <FiChevronRight className='mr-2' />
                                    <Link href='/terms'>Terms & Conditions</Link>
                                </li>
                                <li className='flex items-center'>
                                    <FiChevronRight className='mr-2' />
                                    <Link href='/privacy'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='text-lg font-bold mb-3'>Opening Hours</h4>
                            <p>Tuesday - Saturday: 5pm - late</p>
                            <p>Friday - Saturday: 12pm - 3pm</p>
                            <p>Sunday: 12pm - 9pm</p>
                            {/* <p>Check our opening hours with Google Maps <Link target="_blank" href="https://www.google.com/search?q=lima+restaurant+&sca_esv=581933055&sxsrf=AM9HkKn18FFmhHXPPrQTjFWD6EgC9GEslQ%3A1699888134491&ei=BjxSZd3HHfLQ2roPscaa6Ac&ved=0ahUKEwjd4qfjoMGCAxVyqFYBHTGjBn0Q4dUDCBA&uact=5&oq=lima+restaurant+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGxpbWEgcmVzdGF1cmFudCAyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsANIngdQswVYswVwAXgBkAEAmAEAoAEAqgEAuAEDyAEA-AEB4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#loh=true" className='underline'>here</Link></p> */}

                        </div>
                        <div className='mb-5 break-words'>
                            <h4 className='text-lg font-bold mb-3'>Stay In Touch</h4>
                            <p>Shop 7/16 Hickson Rd, Dawes Point NSW 2000</p>
                            <p>(02) 9319 5454</p>
                            <p> hola@limarestaurant.com.au</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-between text-primaryDark '>
                <hr className='w-[90vw] border-t my-4 opacity-20 border-primaryDark' />
                <span className='my-4 text-center'>&copy;{new Date().getFullYear()} <br />
                    Lima Peruvian Japanese Restaurant, Dawes Point</span>
            </div>
        </footer>

    );
};

export default Footer;

{/* <footer className='flex flex-col items-center justify-center w-full font-medium text-lg sm:text-base mt-[4rem]'>
        <hr className=' w-[90vw] border-t mb-[2rem] opacity-20' />
     
      <Logo className=''/>

      <div className='flex space-x-4 mt-4'>
        <button onClick={handleClickInsta}>Instagram</button>
        <button onClick={handleClickFb}>Facebook</button>
      </div>

      
      <div className='grid grid-cols-3 gap-4 sm:grid-cols-1'>
        
        <div className='mb-4'>
          <h2 className='font-bold'>Quick Links</h2>
          <ul >
            <li >
              <Link className='cursor-pointer' href='/menu'>Menu</Link>
            </li>
            <li>
              <Link className='cursor-pointer' href='/drinks'>Drinks</Link>
            </li>
            <li>
              <Link className='cursor-pointer' href='/terms'>Terms & Conditions</Link>
            </li>
            <li>
              <Link className='cursor-pointer' href='/privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
        </div>

       
        <div className='mb-4'>
          <h2 className='font-bold'>Opening Hours</h2>
         
          <p>Monday - Friday: 9am - 6pm</p>
          <p>Saturday - Sunday: 10am - 4pm</p>
        </div>

 
        <div>
          <h2 className='font-bold'>Stay in Touch</h2>
          <p>123 Main St, Dawes Point</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>

     
      <div className=' flex flex-col items-center justify-between '>
        <hr className='w-[90vw] border-t my-4 opacity-20' />
        <span className='my-4 text-center'>&copy;{new Date().getFullYear()} <br/>
        Lima Peruvian Japanese Restaurant, Dawes Point</span>
      </div>
    </footer> */}