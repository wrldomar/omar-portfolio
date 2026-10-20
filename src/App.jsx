import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Fade sections in once as they enter the viewport
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    // Highlight the nav link for the section in the middle of the screen
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((el) => sectionObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="page-glow" aria-hidden="true"></div>
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
