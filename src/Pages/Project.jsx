import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const Project = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Vite, showcasing my skills and projects with glassmorphism effects and smooth animations.",
      repoLink: "https://github.com/NareshXcodes/developer-portfolio", // Replace with your repo link
      liveLink: "", // Add if you have a live demo
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      stars: 3,
      forks: 0
    },
    {
      title: "Shopping List App",
      description: "A simple and user-friendly Shopping List App built with Kotlin and Jetpack Compose. It allows users to quickly add, edit, and delete items with a clean Material 3 interface. Optimized for both light and dark mode, this app is designed for ease of use and modern Android development practices.",
      repoLink: "https://github.com/NareshXcodes/Android-shopping-list-app.git", // Replace with your repo link
      liveLink: "", // Add if you have a live demo
      technologies: ["Kotlin", "Jetpack Compose"],
      stars: 0,
      forks: 0
    },
    {
      title: "Food Recipe App",
      description: "Food Recipe App A modern Android app built with Jetpack Compose, showcasing food categories using TheMealDB API. Features Material Design 3, MVVM architecture, Retrofit, and Coil for image loading.",
      repoLink: "https://github.com/NareshXcodes/Android-Food-Recipe-App.git", // Replace with your repo link
      liveLink: "", // Add if you have a live demo
      technologies: ["Kotlin", "Jetpack compose", "MealDB"],
      stars: 0,
      forks: 0
    },
    {
      title: "Smart Erp System",
      description: "Build a complete ERP system for college management with features like attendance, notes, assignments, and more.",
      repoLink: "https://github.com/vinit-codes/CampusOS.git", // Replace with your repo link
      liveLink: "", // Add if you have a live demo
      technologies: ["React", "Material UI", "Tailwind CSS" , "JavaScript"],
      stars: 1,
      forks: 0
    }
  ]

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative overflow-hidden pt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="OrangeGradient text-4xl font-bold mb-4 PrimaryFont">PROJECTS</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4 SecondaryFont">
          Here are some of my recent projects. Click on any card to view the repository on GitHub.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-row flex-nowrap gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
              technologies={project.technologies}
              stars={project.stars}
              forks={project.forks}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pb-12">
        <p className="text-gray-400 mb-4">Want to see more of my work?</p>
        <a
          href="https://github.com/NareshXcodes" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
        >
          View All Repositories →
        </a>
      </div>
    </div>
  )
}

export default Project