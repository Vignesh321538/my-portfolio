import { color } from "framer-motion";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const about = () => {
    const socialLinks = [
        { icon: FaInstagram,
          label: 'Instagram', 
          color:'hover:text-pink-500 hover:border-pink-500/40'},
    ]
    return (
        <section id="about" className="min-h-screen flex items-center
        py-20 px-4 sm:px-6 overflow-hiddenrelative">
        <div className="max-w-2xl mx-auto w-full grid grid-cols-1
        lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1 flex flex-col
        items-center lg:items-start text-center lg:text-left"
        data-aos='fade-right'>
        <div className="inline-flex items-center gap-2 px-4
        py-1.5 rounded-full bg-red-500/10 border
        border-red-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500
            animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold
            tracking-wider uppercase dark:text-red-300 text-red-500">
                About Me
            </span>
        </div>
        <h2
  className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-300 leading-tight whitespace-normal lg:whitespace-nowrap">

                    Welcome To Digital Reality!!
            </h2>
        <h3 className="leading-tight whitespace-normal lg:whitespace-nowrap">
            <br />
            <br />
             Hello! I am a developer, passionate about creating beautiful and useful websites!!
        </h3>
        <br />
        <br />
        <br />
        <h4> Want To Reach Me?,Go To Contact... </h4>
        <br />
        <br />
        <div className="flex gap-4 mb-8">
            {socialLinks.map((social,index) => { 
                const IconComponent = social.icon
                return (
                    <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    data-aos='zoom-in'
                    data-aos-delay={index * 100}
                    className={`w-12 h-12 rounded-full flex items-center
                        justify-center text-x1 border border-gray-200
                        dark:border-gray-800 bg-white/50
                        dark:bg-gray-900/50 backdrop-blur-sm
                        dark:text-gray-300 text-gray-700
                        transition-all duration-300
                        hover:scale-110 hover:shadow-lg ${social.color}`}>
                            <IconComponent />
                        </a>
                )
                })}
        </div>
        </div>
        </div>
        </section>
    )
}

export default about