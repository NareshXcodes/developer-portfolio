import React from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Skill from './Pages/Skill.jsx';
import Project from './Pages/Project.jsx';
function App() {

  return (
    <div className = "h-screen w-screen" >
      <BrowserRouter>
      <Navbar />
      <Home />
      <Skill />
      <Project />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </BrowserRouter>

    </div>
  )
}

export default App
