import React, { lazy, Suspense } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';

// Code-split below-the-fold sections until they're needed.
const Skill = lazy(() => import('./Pages/Skill.jsx'))
const Project = lazy(() => import('./Pages/Project.jsx'))
const Contact = lazy(() => import('./Pages/Contact.jsx'))

const SKILLS = ["cpp","py","java","git","github","js","react","tailwind","postgres","nodejs","supabase","aws" , "fastapi","docker","sqlalchemy","pydantic","sqlite"]

// Minimal fallback that matches the dark background — prevents layout shift
const SectionFallback = () => (
  <div className="min-h-screen w-full bg-[#0a0a0a]" />
)

const ScrollAtmosphere = () => {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  })
  const glowPosition = useTransform(progress, [0, 1], ['18% 12%', '82% 88%'])
  const glowBackground = useTransform(
    glowPosition,
    (position) => `radial-gradient(circle at ${position}, rgba(154, 51, 255, 0.13), transparent 34%)`
  )

  if (prefersReducedMotion) return null

  return (
    <div className="scroll-atmosphere" aria-hidden="true">
      <motion.div
        className="scroll-atmosphere__glow"
        style={{
          background: glowBackground,
        }}
      />
      <motion.div
        className="scroll-atmosphere__progress"
        style={{ scaleX: progress }}
      />
    </div>
  )
}

const ScrollSection = ({ id, children }) => {
  const sectionRef = React.useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const depth = useTransform(scrollYProgress, [0, 0.5, 1], [0.985, 1, 0.985])
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.76, 1, 1, 0.76])

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className="snap-start section-shell"
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={prefersReducedMotion ? undefined : { scale: depth, opacity }}
    >
      {children}
    </motion.section>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollAtmosphere />
      <div className="w-full min-h-screen overflow-clip bg-[#0a0a0a] text-white">
        <main>
          <ScrollSection id="home">
            <Home />
          </ScrollSection>
          <ScrollSection id="about">
            <About />
          </ScrollSection>
          <ScrollSection id="skills">
            <Suspense fallback={<SectionFallback />}>
              <Skill skills={SKILLS} />
            </Suspense>
          </ScrollSection>
          <ScrollSection id="projects">
            <Suspense fallback={<SectionFallback />}>
              <Project />
            </Suspense>
          </ScrollSection>
          <ScrollSection id="contact">
            <Suspense fallback={<SectionFallback />}>
              <Contact />
            </Suspense>
          </ScrollSection>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
