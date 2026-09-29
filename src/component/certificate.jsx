import React from "react";

const Certificate = () => {

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
                certificate
                         </span>
                                    </div>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-2.5 text-amber-300 leading-tight whitespace-normal lg:whitespace-nowrap'>
            Coming soon!...
        </h1>
            </div>
            </div>
            </section>
    )
}

export default Certificate