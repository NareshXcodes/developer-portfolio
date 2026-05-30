import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import SmoothCursor from './Components/SmoothCursor.jsx';
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
const Skill = lazy(() => import('./Pages/Skill.jsx'));
const Project = lazy(() => import('./Pages/Project.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));
const Contact = lazy(() => import('./Pages/Contact.jsx'));



const SKILLS = ["cpp","py","java","git","github","js","react","tailwind","firebase","aws"]

function LazySection({ id, children, rootMargin = '400px', eager = false }) {
  const [isVisible, setIsVisible] = useState(eager);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (eager || isVisible) {
      return;
    }

    const node = sectionRef.current;
    if (!node) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [eager, isVisible, rootMargin]);

  return (
    <section id={id} ref={sectionRef}>
      {isVisible ? children : null}
    </section>
  );
}

function App() {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <SmoothCursor />
        <Navbar />
        <div className="smooth-scroll">
          <section id="home">
            <Home />
          </section>
          <LazySection id="about">
            <Suspense fallback={null}>
              <About />
            </Suspense>
          </LazySection>
          <LazySection id="skills">
            <Suspense fallback={null}>
              <Skill skills={SKILLS} />
            </Suspense>
          </LazySection>
          <LazySection id="projects">
            <Suspense fallback={null}>
              <Project />
            </Suspense>
          </LazySection>
          <LazySection id="contact">
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </LazySection>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
