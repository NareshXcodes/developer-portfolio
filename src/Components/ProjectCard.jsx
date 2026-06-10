import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'

const ProjectCard = ({ 
  title, 
  description, 
  repoLink, 
  liveLink, 
  image, 
  technologies, 
  stars, 
  forks 
}) => {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return
    const div = divRef.current
    const rect = div.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  const handleCardClick = () => {
    if (repoLink) {
      window.open(repoLink, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="relative flex h-full w-full min-w-[280px] sm:min-w-[340px] max-w-[340px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#121214] p-6 cursor-pointer group hover:border-white/20 transition-colors duration-500 shadow-xl"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Top and Bottom Gradient Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Project Image */}
        {image && (
          <div className="mb-5 rounded-xl overflow-hidden relative border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className="PrimaryFont text-2xl font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <div className="flex space-x-2 mt-1 shrink-0">
            <div className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors duration-200">
              <FaGithub 
                size={16} 
                className="text-gray-400 group-hover:text-white transition-colors duration-200"
              />
            </div>
            {liveLink && (
              <div 
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(liveLink, '_blank', 'noopener,noreferrer')
                }}
              >
                <FaExternalLinkAlt 
                  size={14} 
                  className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200"
                />
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="SecondaryFont text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {description || 'Click to view this project on GitHub'}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="SecondaryFont px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-md border border-white/5 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="SecondaryFont px-3 py-1.5 bg-white/5 text-gray-400 text-xs font-medium rounded-md border border-white/5 backdrop-blur-md">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Bottom Stats */}
        <div className="flex justify-between items-center pt-5 border-t border-white/10 mt-auto">
          <div className="flex items-center space-x-5">
            {stars !== undefined && (
              <div className="SecondaryFont flex items-center space-x-1.5 text-gray-400 group-hover:text-amber-400 transition-colors duration-300">
                <FaStar size={14} />
                <span className="text-sm font-medium">{stars}</span>
              </div>
            )}
            {forks !== undefined && (
              <div className="SecondaryFont flex items-center space-x-1.5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                <FaCodeBranch size={14} />
                <span className="text-sm font-medium">{forks}</span>
              </div>
            )}
          </div>
          <div className="SecondaryFont text-gray-500 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
            <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
            <motion.span 
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard