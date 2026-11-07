import React, { useRef, useState, useCallback } from 'react'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaFolder } from 'react-icons/fa'

const ProjectCard = ({ 
  title, 
  description, 
  repoLink, 
  liveLink, 
  technologies, 
  stars, 
  forks,
  index = 0
}) => {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const handleCardClick = useCallback(() => {
    if (repoLink) {
      window.open(repoLink, '_blank', 'noopener,noreferrer')
    }
  }, [repoLink])

  const handleCardKeyDown = useCallback((event) => {
    if (event.target !== event.currentTarget) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCardClick()
    }
  }, [handleCardClick])

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={repoLink ? 0 : -1}
      aria-label={`View ${title} repository on GitHub`}
      style={{
        '--mouse-x': '150px',
        '--mouse-y': '150px',
      }}
      className="relative group w-full sm:w-[320px] md:w-[360px] h-auto min-h-[300px] sm:h-[350px] sm:shrink-0 rounded-2xl p-[1px] cursor-pointer overflow-hidden transition-all duration-300"
    >
      {/* Dynamic Glow Border layer following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 1 : 0.3,
          background: isHovered
            ? `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255, 134, 96, 0.4), rgba(154, 51, 255, 0.25), transparent 65%)`
            : 'rgba(255, 255, 255, 0.06)',
        }}
      />

      {/* Card Main Body */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-2xl bg-[#0e0e11]/90 backdrop-blur-xl border border-white/5 p-5 sm:p-6 group-hover:bg-[#121216]/95 transition-colors duration-300">
        
        {/* Inner Mouse Follow Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.7 : 0,
            background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 50%)`,
          }}
        />

        {/* Top Header Section: Folder Badge + Number + External / GitHub Links */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-orange-400 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                <FaFolder size={15} />
              </div>
              <span className="SecondaryFont text-xs tracking-widest text-gray-500 uppercase font-semibold">
                0{index + 1}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {liveLink && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(liveLink, '_blank', 'noopener,noreferrer')
                  }}
                  aria-label={`Open live demo for ${title}`}
                  title="Live Demo"
                  className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <FaExternalLinkAlt size={12} />
                </button>
              )}
              <div
                title="GitHub Repository"
                aria-hidden="true"
                className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors duration-200"
              >
                <FaGithub size={14} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="PrimaryFont text-xl sm:text-2xl font-bold text-white tracking-wide mb-2 line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="SecondaryFont text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Bottom Section: Tech Stack Badges + Stats */}
        <div className="pt-4 mt-4 border-t border-white/5 flex flex-col gap-3">
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="SecondaryFont px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-medium text-gray-300 bg-white/[0.03] border border-white/10 group-hover:border-white/20 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-gray-500 SecondaryFont pt-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 hover:text-amber-400 transition-colors duration-200">
                <FaStar size={12} />
                <span>{stars ?? 0}</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors duration-200">
                <FaCodeBranch size={12} />
                <span>{forks ?? 0}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-400 group-hover:text-white transition-colors duration-200 font-medium tracking-wider uppercase text-[11px]">
              <span>View</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </div>
          </div>
        </div>

      </div>
    </article>
  )
}

export default ProjectCard
