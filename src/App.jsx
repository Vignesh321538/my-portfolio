import AOS from 'aos'
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Skills from './component/skills';
import Certificate from './component/certificate';
import Contact from './component/contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toogleDarkMood = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };
  return (

    <div
      className={darkMode
        ? "bg-linear-to-br from-red-500 via-[#4b480d]  min-h-screen"
        : "bg-linear-to-br from-red-400 min-h-screen"}
    >
      <Navbar darkMode={darkMode} toogleDarkMode={toogleDarkMood} />

      <section id="home">
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='certificate'>
        <Certificate />
      </section>

      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App