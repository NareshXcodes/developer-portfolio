import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import nameLogo from './../assets/logo1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <nav className="w-full h-16 flex items-center justify-between bg-black/30 backdrop-blur-md border-none border-white/10 fixed top-0 z-50 px-4 lg:px-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="h-10 w-10 rounded-full" src={nameLogo} alt="Naresh Logo" />
        <h1 className="PrimaryGradient PrimaryFont text-2xl lg:text-3xl font-bold ml-3">
          Naresh.
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-white SecondaryFont text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white SecondaryFont text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-white SecondaryFont text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-white SecondaryFont text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-white SecondaryFont text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden">
          <div className="flex flex-col py-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white SecondaryFont text-lg font-medium px-6 py-3 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white SecondaryFont text-lg font-medium px-6 py-3 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white SecondaryFont text-lg font-medium px-6 py-3 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white SecondaryFont text-lg font-medium px-6 py-3 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white SecondaryFont text-lg font-medium px-6 py-3 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar