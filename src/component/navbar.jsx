import { Sun, Moon } from 'lucide-react'
import React, { useState } from 'react'
import { FaCertificate, FaCode, FaEnvelope, FaHome, FaUser } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = ({ darkMode, toogleDarkMode }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificate', link: '#certificate', icon: FaCertificate },
    { name: 'Contact', link: '#contact', icon: FaEnvelope },
  ]
  return (
    <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-centre'>
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className='relative bg-linear-to-w from-white-600
       to-white-800 backdrop-blur-x1 rounded-2x1 shadow-2x1 border-white/20 px-3 py-2'>
        <div className='flex items-center justify-around gap-1'>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            
            return (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={() => setActiveTab(item.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='flex flex-col items-center gap-0.5
                  py-1.5 px-2 relative group flex-1'>
                {isActive && (
                  <motion.div
                    layoutId='activeTab'
                    className='absolute -top-2 left-1/2
        -translate-x-1/2 w-6 h-1 bg-white rounded-full'
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                )}
                <Icon
                  className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}
                />
          <span className={`text-[10px] font-medium transition-all
          duration-300 ${
            isActive
              ? 'text-white'
              : 'text-gray-600 dark:text-gray-300 group-hover:text-indigo-300'
            }`}>
                {item.name}

             
          </span>
              </motion.a>
            )
          })}
          </div>
      </motion.nav>
    </div>
  )
}

export default Navbar