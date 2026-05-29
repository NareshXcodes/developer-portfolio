import React, { useEffect, useRef, useState } from 'react'
import BounceCards from '../Components/BounceCards'
import ProjectCard from '../Components/ProjectCard'

const Project = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const transformStyles = [
    'rotate(-6deg) translate(-180px)',
    'rotate(4deg) translate(-60px)',
    'rotate(-4deg) translate(60px)',
    'rotate(6deg) translate(180px)'
  ]

  useEffect(() => {
    if (typeof window === 'undefined' || isVisible) return
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-screen bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(255,134,96,0.18), transparent 45%), radial-gradient(circle at 85% 10%, rgba(154,51,255,0.16), transparent 40%), radial-gradient(circle at 70% 80%, rgba(91,173,255,0.14), transparent 45%)'
          }}
        />
        <div
          className="project-3d-orb absolute -top-24 left-8 h-64 w-64 rounded-full bg-[#FF8660]/20 blur-3xl"
        />
        <div
          className="project-3d-orb absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#9A33FF]/20 blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="OrangeGradient text-4xl font-bold mb-4 PrimaryFont tracking-wide">PROJECTS</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4 SecondaryFont">
            Here are some of my recent projects. Click on any card to view the repository on GitHub.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="flex justify-center px-6 pb-20">
          {isVisible ? (
            <BounceCards
              className="origin-top scale-[0.72] sm:scale-90 md:scale-100"
              items={projects}
              renderItem={(project) => (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  repoLink={project.repoLink}
                  liveLink={project.liveLink}
                  technologies={project.technologies}
                  stars={project.stars}
                  forks={project.forks}
                />
              )}
              containerWidth={900}
              containerHeight={460}
              animationDelay={0.4}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.6)"
              transformStyles={transformStyles}
              enableHover
              cardClassName="w-[340px] sm:w-[360px] h-auto border-0 overflow-visible"
              cardStyle={{ boxShadow: 'none' }}
            />
          ) : (
            <div
              className="origin-top scale-[0.72] sm:scale-90 md:scale-100"
              style={{ width: 900, height: 460 }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center pb-12">
          <p className="text-gray-400 mb-4 SecondaryFont">Want to see more of my work?</p>
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
    </div>
  )
}

export default Project