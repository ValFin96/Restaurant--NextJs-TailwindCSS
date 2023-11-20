'use client'

import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';


const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-light
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-all-[width] ease duration-300 ease-out-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light my-5`} onClick={handleClick} >
            {title}

            <span className={`h-[1px] inline-block w-0 bg-light
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-all-[width] ease duration-300 ease-out-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark`}
            >&nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [blur, setBlur] = useState("")
    const menuRef = useRef(null)


    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        let handler = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {

                setIsOpen(false)

            }
        };
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        }
    });


    useEffect(() => {
        const applyBlur = () => {
            if (window.scrollY >= 90) {
                setBlur('backdrop-blur-md')
            } else {
                setBlur('')
            }
        }

        window.addEventListener('scroll', applyBlur)
        return () => {
            window.removeEventListener('scroll', applyBlur)
        }
    }, [])


    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);

    return (
        <>
            <div className={`fixed w-full p-5 flex items-center justify-between ${blur} z-20`}
            >
                <Logo className='mt-4 ml-4 sm:m-0 sm:w-[170px]'/>
                <nav className="text-lg font-primary lg:hidden">
                    <CustomLink href="/" title="Home" className="mx-4" />
                    <CustomLink href="/about" prefertch={false} title="Our Story" className="mx-4" />
                    <CustomLink href="/menu" prefertch={false} title="Menu" className="mx-4" />
                    <CustomLink href="/drinks" prefertch={false} title="Drinks" className="mx-4" />
                    <CustomLink target="_blank" prefertch={false} href="https://app.gift-it.com.au/buy/warike-limanikkei" title="Gift Cards" className="mx-4" />
                    <CustomLink href="/contact" prefertch={false} title="Contact" className="mx-4" />
                    <CustomLink href="/" prefertch={false} title="Reservations" className="mx-4" />
                </nav>
                <button className=" flex-col justify-center items-center hidden px-5 lg:flex" onClick={handleClick}>
                    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-10 rounded-sm -translate-y-1 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
                    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-10 rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-10 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
                </button>

                {
                    isOpen ?
                        <motion.div
                            ref={menuRef}
                            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="min-w-[90vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                                 bg-dark/90 backdrop-blur-md py-3 sm:text-sm"
                            style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <nav className="flex items-center flex-col justify-center text-2xl sm:text-xl">
                                <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                                <CustomMobileLink href="/about"  prefertch={false} title="Our Story" className="" toggle={handleClick} />
                                <CustomMobileLink href="/menu"  prefertch={false} title="Menu" className="" toggle={handleClick} />
                                <CustomMobileLink href="/drinks" prefertch={false}  title="Drinks" className="" toggle={handleClick} />
                                <CustomMobileLink href="https://app.gift-it.com.au/buy/warike-limanikkei" prefertch={false} title="Gift Cards" className="" toggle={handleClick} />
                                <CustomMobileLink href="/contact" prefertch={false} title="Contact" className="" toggle={handleClick} />
                                <CustomMobileLink href="/" prefertch={false} title="Reservations" className="" toggle={handleClick} />
                            </nav>
                        </motion.div>
                        : null
                }
            </div>
        </>
    );
};

export default NavBar;

