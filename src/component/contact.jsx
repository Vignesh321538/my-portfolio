import React from "react";

const Contact = () => {
  return (
    <section
     id="contact" 
    className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-6">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white text-gray-900"
            data-aos="fade-up"
          >
            Be In Touch
          </h2>
        </div>

        <div className="max-w-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            data-aos="fade-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase dark:text-red-300 text-red-500">
                Contact Me
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-mono mb-4 text-amber-300 leading-tight whitespace-normal lg:whitespace-nowrap">
              You Can Reach Me By:
            </h3>

            <p>Whatsapp: 1234567890</p>
            <p>Mail.Id: viki12356@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;