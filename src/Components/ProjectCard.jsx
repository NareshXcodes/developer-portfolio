import React, { useRef, useCallback } from 'react'
import { motion } from 'motion/react'
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

  // Direct CSS custom property updates — zero React re-renders from mousemove
  const handleMouseMove = useCallback((e) => {
    const div = divRef.current
    if (!div) return
    const rect = div.getBoundingClientRect()
    div.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    div.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (divRef.current) divRef.current.style.setProperty('--spot-opacity', '1')
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (divRef.current) divRef.current.style.setProperty('--spot-opacity', '0')
  }, [])

  const handleCardClick = useCallback(() => {
    if (repoLink) {
      window.open(repoLink, '_blank', 'noopener,noreferrer')
    }
  }, [repoLink])

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="relative flex h-full w-full min-w-[280px] sm:min-w-[340px] max-w-[340px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#121214] p-6 cursor-pointer group hover:border-white/20 transition-colors duration-500 shadow-xl"
      style={{
        '--mx': '0px',
        '--my': '0px',
        '--spot-opacity': '0',
      }}
    >
      {/* Spotlight Effect — reads CSS custom properties, no React state */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity: 'var(--spot-opacity)',
          background: `radial-gradient(500px circle at var(--mx) var(--my), rgba(255,255,255,0.06), transparent 40%)`,
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
              loading="lazy"
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