import React from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Skill from './Pages/Skill.jsx';
import Project from './Pages/Project.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

const SKILLS = ["cpp","py","java","git","github","js","react","tailwind","postgres","nodejs","supabase","aws" , "fastapi","docker","sqlalchemy","pydantic","sqlite"]

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
              <Skill skills={SKILLS} />
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
            <Project />
          </motion.section>
          <motion.section 
            id="contact" 
            className="snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Contact />
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
