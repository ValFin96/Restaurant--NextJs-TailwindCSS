import {
  ChevronRight,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon
} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container grid grid-flow-row gap-20 text-primaryDark text-sm my-12">
      <hr className="w-full border-primaryDark opacity-30" />
      <div className="w-full flex flex-col justify-center items-center gap-14">
        <Branding />
        <QuickLinks />
      </div>
      <hr className="w-full border-primaryDark opacity-30" />
    </footer>
  )
}

const Branding = () => (
  <div className="grid grid-flow-row gap-4">
    <Link href="/">
      <Image
        src="/images/Lima-Logo-Black.webp"
        alt="Lima Peruvian Japanese Restaurant in Dawes Point"
        width={200}
        height={200}
        priority={true}
        className="sm:w-[170px]"
      />
    </Link>
    <div className="flex gap-4 items-center">
      <Link
        href="https://www.instagram.com/limanikkei_sydney/"
        target="_blank"
        className="flex gap-2 items-end text-sm">
        <InstagramIcon />
        Instagram
      </Link>
      <Link
        href="https://www.facebook.com/limanikkei.sydney"
        target="_blank"
        className="flex gap-2 items-end text-sm">
        <FacebookIcon />
        Facebook
      </Link>
    </div>
  </div>
)

const QuickLinks = () => {
  const links = [
    {
      label: 'Menu',
      route: '/menu'
    },
    {
      label: 'Drinks',
      route: '/drinks'
    },
    {
      label: 'Functions',
      route: '/functions'
    },
    {
      label: 'Terms & Conditions',
      route: '/terms'
    },
    {
      label: 'Privacy Policy',
      route: '/privacy'
    }
  ]

  return (
    <div className="flex gap-20">
      {/* Links */}
      <div>
        <LinkTitle title="Quick Links" />
        <ul className="grid grid-flow-row gap-1">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                href={route}
                className="flex items-center gap-2 hover:text-pink-800 hover:translate-x-3 transition-all duration-500 ease-in-out">
                <ChevronRight />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Opening hours */}
      <div>
        <LinkTitle title="Opening Hours" />
        <div className="grid grid-flow-row gap-1">
          <p>Tuesday - Saturday: 5pm - late</p>
          <p>Friday - Saturday: 12pm - 3pm</p>
          <p>Sunday: 12pm - 9pm</p>
        </div>
      </div>

      {/* Address */}
      <div>
        <LinkTitle title="Stay In Touch" />
        <div className="grid grid-flow-row gap-1">
          <p>Shop 7/16 Hickson Rd, Dawes Point NSW 2000</p>
          <p>
            <Link href="tel:93195454" className="flex gap-2 items-center">
              <PhoneIcon size={12} />
              {`(02) 9319 5454`}
            </Link>
          </p>
          <p>
            <Link
              href="mailto:hola@limarestaurant.com.au"
              className="flex gap-2 items-center">
              <MailIcon size={12} />
              hola@limarestaurant.com.au
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

const LinkTitle = ({ title }) => (
  <h4 className="text-lg font-bold mb-3">{title}</h4>
)

export default Footer

// OLD CODE
{
  /*
  <footer className="container bg-primary">
      <div className="flex items-center justify-center">
        <hr className="w-[90vw] border-t mt-4 opacity-20 border-primaryDark" />
      </div>
      <div className="flex flex-col gap-12 text-gray-200">
        <div className="flex flex-col justify-center items-center">
          <Link href="/">
            <Image
              src="/images/Lima-Logo-Black.webp"
              alt="Lima Peruvian Japanese Restaurant in Dawes Point"
              width={200}
              height={200}
              priority={true}
              className="sm:w-[170px]"
            />
          </Link>
          <div className="flex space-x-3 items-center justify-center mb-[2rem] mt-4 text-primaryDark">
            <Link
              href="https://www.instagram.com/limanikkei_sydney/"
              target="_blank"
              className="flex text-sm">
              <FiInstagram size={'1.2em'} className="mr-1" />
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/limanikkei.sydney"
              target="_blank"
              className="flex text-sm">
              <FiFacebook size={'1.2em'} className="mr-0.4" />
              Facebook
            </Link>
          </div>
        </div>
        <div className="max-w-7xl">
          <div className="grid grid-cols-3 xs:grid-cols-1 lg:grid-cols-3 gap-3 overflow-hidden text-primaryDark">
            <div className="mb-5">
              <h4 className="text-lg font-bold mb-3 ">Quick Links</h4>
              <ul className="m-0 p-0">
                <li className="flex items-center">
                  <FiChevronRight className="mr-2" />
                  <Link href="/menu">Menu</Link>
                </li>
                <li className="flex items-center">
                  <FiChevronRight className="mr-2" />
                  <Link href="/drinks">Drinks</Link>
                </li>
                <li className="flex items-center">
                  <FiChevronRight className="mr-2" />
                  <Link href="/functions">Functions</Link>
                </li>
                <li className="flex items-center">
                  <FiChevronRight className="mr-2" />
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li className="flex items-center">
                  <FiChevronRight className="mr-2" />
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-lg font-bold mb-3">Opening Hours</h4>
              <p>Tuesday - Saturday: 5pm - late</p>
              <p>Friday - Saturday: 12pm - 3pm</p>
              <p>Sunday: 12pm - 9pm</p>
              <p>Check our opening hours with Google Maps <Link target="_blank" href="https://www.google.com/search?q=lima+restaurant+&sca_esv=581933055&sxsrf=AM9HkKn18FFmhHXPPrQTjFWD6EgC9GEslQ%3A1699888134491&ei=BjxSZd3HHfLQ2roPscaa6Ac&ved=0ahUKEwjd4qfjoMGCAxVyqFYBHTGjBn0Q4dUDCBA&uact=5&oq=lima+restaurant+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGxpbWEgcmVzdGF1cmFudCAyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsANIngdQswVYswVwAXgBkAEAmAEAoAEAqgEAuAEDyAEA-AEB4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#loh=true" className='underline'>here</Link></p>
            </div>
            <div className="mb-5 break-words">
              <h4 className="text-lg font-bold mb-3">Stay In Touch</h4>
              <p>Shop 7/16 Hickson Rd, Dawes Point NSW 2000</p>
              <p>(02) 9319 5454</p>
              <p> hola@limarestaurant.com.au</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-between text-primaryDark ">
        <hr className="w-[90vw] border-t my-4 opacity-20 border-primaryDark" />
        <span className="my-4 text-center">
          &copy;{new Date().getFullYear()} <br />
          Lima Peruvian Japanese Restaurant, Dawes Point
        </span>
      </div>
    </footer>


    // YOUR COMMENTED CODE
{
  /* <footer className='flex flex-col items-center justify-center w-full font-medium text-lg sm:text-base mt-[4rem]'>
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
    </footer> */
}
