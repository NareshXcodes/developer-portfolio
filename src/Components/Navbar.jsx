import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi'

const navItems = [
  { name: 'Home', url: '#home', icon: FiHome },
  { name: 'About', url: '#about', icon: FiUser },
  { name: 'Skills', url: '#skills', icon: FiCode },
  { name: 'Projects', url: '#projects', icon: FiBriefcase },
  { name: 'Contact', url: '#contact', icon: FiMail },
]

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(navItems[0].name)

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.url))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach(section => {
        if (!section) return
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const matchingItem = navItems.find(item => item.url === `#${section.id}`)
          if (matchingItem) setActiveTab(matchingItem.name)
        }
      })
    }

    // Since we use scroll-snap on html, we listen to window scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, url, name) => {
    e.preventDefault()
    const element = document.querySelector(url)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveTab(name)
    }
  }

  return (
    <div className="fixed bottom-6 sm:top-6 sm:bottom-auto left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 sm:gap-2 py-2 px-3 sm:px-4 bg-[#0a0a0a]/60 border border-white/10 backdrop-blur-xl rounded-full shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => scrollToSection(e, item.url, item.name)}
              className={`relative cursor-pointer flex flex-col items-center justify-center text-xs sm:text-sm font-semibold px-4 sm:px-4 py-3 sm:py-2.5 rounded-full transition-colors duration-300 ${
                isActive ? 'text-[#FF8660]' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <motion.div 
                className="flex items-center gap-2 SecondaryFont tracking-wide"
                whileTap={{ scale: 0.8, y: -5 }}
              >
                <Icon size={20} className="sm:w-4 sm:h-4" strokeWidth={isActive ? 2.5 : 2} />
                <span className="hidden sm:inline">{item.name}</span>
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full sm:bg-[#FF8660]/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Desktop Glowing Tubelight */}
                  <div className="hidden sm:block absolute -top-[9px] left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FF8660] rounded-b-sm z-20">
                    <div className="absolute w-12 h-6 bg-[#FF8660]/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#FF8660]/30 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#FF8660]/40 rounded-full blur-sm top-0 left-2" />
                  </div>

                  {/* Mobile Mac Dock Dot */}
                  <div className="sm:hidden absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF8660] rounded-full shadow-[0_0_8px_2px_rgba(255,134,96,0.6)]" />
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar