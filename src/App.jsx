import React, { lazy, Suspense } from 'react'
import { motion } from 'motion/react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';

// Code-split below-the-fold sections — defers loading cobe (WebGL),
// BounceCards, and other heavy components until they're needed.
const Skill = lazy(() => import('./Pages/Skill.jsx'))
const Project = lazy(() => import('./Pages/Project.jsx'))
const Contact = lazy(() => import('./Pages/Contact.jsx'))

const SKILLS = ["cpp","py","java","git","github","js","react","tailwind","postgres","nodejs","supabase","aws" , "fastapi","docker","sqlalchemy","pydantic","sqlite"]

// Minimal fallback that matches the dark background — prevents layout shift
const SectionFallback = () => (
  <div className="min-h-screen w-full bg-[#0a0a0a]" />
)

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen overflow-clip bg-[#0a0a0a] text-white">
        <main>
          <motion.section 
            id="home" 
            className="snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Home />
          </motion.section>
          <motion.section 
            id="about" 
            className="snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <About />
          </motion.section>
          <motion.section
            id="skills" 
            className="snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <section 
              id="skills" 
              className="snap-start"
            >
              <Suspense fallback={<SectionFallback />}>
                <Skill skills={SKILLS} />
              </Suspense>
            </section>
          </motion.section>
          <motion.section 
            id="projects" 
            className="snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Suspense fallback={<SectionFallback />}>
              <Project />
            </Suspense>
          </motion.section>
          <motion.section 
            id="contact" 
            className="snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Suspense fallback={<SectionFallback />}>
              <Contact />
            </Suspense>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
