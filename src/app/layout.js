
import { Heebo } from 'next/font/google'
import Matter from 'next/font/local'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './globals.css'

const heebo = Heebo({ subsets: ['latin'], display: 'swap', variable: '--font-base' })
const matter = Matter({ src: '../../fonts/Matter-Regular.otf', display: 'swap', variable: '--font-primary'})

export const metadata = {
  title: 'Lima Restaurant & Bar | Walsh Bay',
  description: 'Peruvian Japanese Restaurant In Dawes Point, Sydney',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} ${matter.variable} bg-primary text-light font-primary`}>
       
        <NavBar/>
        <main className='max-w-6xl mx-auto'>
        {children}
        </main>
        <Footer/>
        </body>
        
    </html>
  )
}
