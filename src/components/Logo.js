import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import limaLogo from '../../public/images/lima-logo.webp'

const Logo = ({className = "" }) => {
    return (
        <Link href='/' >
            <Image src={limaLogo} alt='Lima Peruvian Japanese Restaurant in Dawes Point' width={200} height={200} priority={true} className={` ${className}`} />
        </Link>
    )
}

export default Logo