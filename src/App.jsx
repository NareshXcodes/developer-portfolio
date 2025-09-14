import React from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Skill from './Pages/Skill.jsx';
import Project from './Pages/Project.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';



function App() {

  return (
    <div className="w-screen">
      <BrowserRouter>
        <Navbar />
        <div className="smooth-scroll">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skill />
          </section>
          <section id="projects">
            <Project />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
