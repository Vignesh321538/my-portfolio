import { Home, Icon } from 'lucide-react'
import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const socialIcons = [
           {icon: FaInstagram, alt: 'Instagram',link:'#'},
           {icon: FaLinkedin, alt: 'Linkedin',link:'#'},
  ]
  return (
    <section id='Home' className='min-h-screen flex items-center
    relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-8 lg:px-14
       py-12 lg:-mt-14 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center
        justify-between gap-12 lg:gap-16'>
          <div className='lg:w-2/5 w-full flex justify-center'
            data-aos='fade-right'>
            <div className='absolute inset-0
            bg-linear-to-r from-indigo-300 to-indigo-700 rounded-full
            filter blur-2x1 opacity-30 group-hover:opacity-50 transition-opacity
            duration-500'>
              <div>
               <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-2.5 text-[#D9C8BC]/'>
                Hi, I'm Vignesh
               </h1>
               <h2 className='text-xl sm:text-2xl font-mono mb-4 text-[#E8D9CF]/'>
                Mern developer
               </h2>
                <p className='text-[#CBB8AA]/'> We can help together to public by 
                  creating website for your service
                </p>
                 <br />
                 <br />
                 <p className='text-xl sm:text-2xl font-mono mb-4 text-[#D8C9BF]/'> I'm a fresher, give a trust!!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero