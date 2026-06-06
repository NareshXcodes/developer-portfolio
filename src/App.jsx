import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
const Skill = lazy(() => import('./Pages/Skill.jsx'));
const Project = lazy(() => import('./Pages/Project.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));
const Contact = lazy(() => import('./Pages/Contact.jsx'));



const SKILLS = ["cpp","py","java","git","github","js","react","tailwind","postgres","nodejs","supabase","aws" , "fastapi"]

const sectionFallbackStyle = {
  minHeight: '60vh',
  width: '100%',
};

const hasWindow = typeof window !== 'undefined';

function scheduleIdleTask(callback) {
  if (hasWindow && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }

  return globalThis.setTimeout(callback, 200);
}

function cancelIdleTask(handle) {
  if (hasWindow && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(handle);
    return;
  }

  globalThis.clearTimeout(handle);
}

function SectionFallback() {
  return <section aria-hidden="true" style={sectionFallbackStyle} />;
}

function useWarmLazySections() {
  useEffect(() => {
    const handle = scheduleIdleTask(() => {
      void import('./Pages/About.jsx');
      void import('./Pages/Skill.jsx');
      void import('./Pages/Project.jsx');
      void import('./Pages/Contact.jsx');
    });

    return () => cancelIdleTask(handle);
  }, []);
}

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
  useWarmLazySections();

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <main>
          <section id="home">
            <Home />
          </section>
          <LazySection id="about" rootMargin="240px 0px">
            <Suspense fallback={<SectionFallback />}>
              <About />
            </Suspense>
          </LazySection>
          <LazySection id="skills" rootMargin="240px 0px">
            <Suspense fallback={<SectionFallback />}>
              <Skill skills={SKILLS} />
            </Suspense>
          </LazySection>
          <LazySection id="projects" rootMargin="240px 0px">
            <Suspense fallback={<SectionFallback />}>
              <Project />
            </Suspense>
          </LazySection>
          <LazySection id="contact" rootMargin="240px 0px">
            <Suspense fallback={<SectionFallback />}>
              <Contact />
            </Suspense>
          </LazySection>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
