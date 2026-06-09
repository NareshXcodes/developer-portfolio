import React from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Skill from './Pages/Skill.jsx';
import Project from './Pages/Project.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

const SKILLS = ["cpp","py","java","git","github","js","react","tailwind","postgres","nodejs","supabase","aws" , "fastapi"]

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home" className="snap-start">
          <Home />
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="skills" className="snap-start">
          <Skill skills={SKILLS} />
        </section>
        <section id="projects" className="snap-start">
          <Project />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
