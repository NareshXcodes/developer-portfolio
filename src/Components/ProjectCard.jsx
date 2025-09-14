import React from 'react'
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
  const handleCardClick = () => {
    if (repoLink) {
      window.open(repoLink, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group min-w-[350px] max-w-[350px] flex-shrink-0"
      onClick={handleCardClick}
    >
      {/* Project Image */}
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex space-x-2">
          <FaGithub 
            size={20} 
            className="text-gray-400 group-hover:text-white transition-colors duration-200"
          />
          {liveLink && (
            <FaExternalLinkAlt 
              size={18} 
              className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation()
                window.open(liveLink, '_blank', 'noopener,noreferrer')
              }}
            />
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {description || 'Click to view this project on GitHub'}
      </p>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full border border-gray-500/30">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Bottom Stats */}
      <div className="flex justify-between items-center pt-4 border-t border-white/10">
        <div className="flex items-center space-x-4">
          {stars !== undefined && (
            <div className="flex items-center space-x-1 text-gray-400">
              <FaStar size={12} />
              <span className="text-sm">{stars}</span>
            </div>
          )}
          {forks !== undefined && (
            <div className="flex items-center space-x-1 text-gray-400">
              <FaCodeBranch size={12} />
              <span className="text-sm">{forks}</span>
            </div>
          )}
        </div>
        <div className="text-gray-400 group-hover:text-white transition-colors duration-200">
          <span className="text-xs">Click to view →</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard