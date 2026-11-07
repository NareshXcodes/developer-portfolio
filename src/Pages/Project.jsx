import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Globe from '../Components/Globe'
import ProjectCard from '../Components/ProjectCard'

const PROJECTS = [
  {
    name: 'ArchTrack',
    title: 'ArchTrack',
    description: 'An architectural decision records platform for engineering teams to capture, collaborate, and track technical architecture choices.',
    repoLink: 'https://github.com/NareshXcodes/ArchTrack',
    liveLink: '',
    technologies: ['React', 'FastAPI', 'PostgreSQL'],
    stars: 0,
    forks: 0,
  },
  {
    name: 'Personal-Finance-Manager-API',
    title: 'Finance Manager API',
    description: 'High-performance REST API for transaction management, budgets, categorisation, and expense tracking.',
    repoLink: 'https://github.com/NareshXcodes/Personal-Finance-Manager-API',
    liveLink: '',
    technologies: ['FastAPI', 'Python', 'SQLAlchemy'],
    stars: 0,
    forks: 0,
  },
  {
    name: 'developer-portfolio',
    title: 'Developer Portfolio',
    description: 'Modern developer portfolio featuring WebGL shaders, interactive components, and smooth micro-interactions.',
    repoLink: 'https://github.com/NareshXcodes/developer-portfolio',
    liveLink: '',
    technologies: ['React', 'Tailwind', 'Vite'],
    stars: 0,
    forks: 0,
  },
  {
    name: 'Orbital-Guardian',
    title: 'Orbital Guardian',
    description: 'Automated threat intelligence platform for monitoring security signals, incident logs, and vulnerability vectors.',
    repoLink: 'https://github.com/NareshXcodes/Orbital-Guardian',
    liveLink: '',
    technologies: ['FastAPI', 'Python', 'AWS'],
    stars: 0,
    forks: 0,
  },
]

const Project = () => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [projects, setProjects] = useState(PROJECTS)

  // Track scroll position within this container for desktop horizontal sliding
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Horizontal motion on large screens
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"])

  useEffect(() => {
    const controller = new AbortController()

    const repoNames = [
      "ArchTrack",
      "Personal-Finance-Manager-API",
      "developer-portfolio",
      "Orbital-Guardian",
    ]

    Promise.allSettled(
      repoNames.map(async (repoName) => {
        const response = await fetch(
          `https://api.github.com/repos/NareshXcodes/${repoName}`,
          { signal: controller.signal }
        )
        if (!response.ok) {
          throw new Error(`GitHub returned ${response.status} for ${repoName}`)
        }
        return response.json()
      })
    ).then((results) => {
      if (controller.signal.aborted) return

      const fetchedProjects = results.map((result, index) => {
        const fallback = PROJECTS[index]
        if (result.status === 'rejected' || !result.value?.name) {
          return fallback
        }

        const repo = result.value
        return {
          ...fallback,
          title: repo.name.replace(/[-_]/g, ' '),
          description: repo.description || fallback.description,
          repoLink: repo.html_url || fallback.repoLink,
          liveLink: repo.homepage || fallback.liveLink,
          technologies: [
            repo.language,
            ...(repo.topics || []).slice(0, 2)
          ].filter(Boolean).length > 0
            ? [repo.language, ...(repo.topics || []).slice(0, 2)].filter(Boolean)
            : fallback.technologies,
          stars: repo.stargazers_count ?? fallback.stars,
          forks: repo.forks_count ?? fallback.forks,
        }
      })

      setProjects(fetchedProjects)
    })

    return () => controller.abort()
  }, [])

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
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div
      ref={containerRef}
      className="relative w-full sm:h-[260vh] bg-gradient-to-br from-[#0a0a0a] via-[#111114] to-[#0a0a0a] border-t border-white/5 py-20 sm:py-0"
    >
      {/* Container: normal flow on mobile, sticky full-screen viewport on desktop */}
      <div className="relative sm:sticky sm:top-0 min-h-screen sm:h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-0 pt-6 sm:pt-24 pb-8 sm:pb-14">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 25%, rgba(255,134,96,0.12), transparent 45%), radial-gradient(circle at 85% 15%, rgba(154,51,255,0.12), transparent 40%), radial-gradient(circle at 50% 85%, rgba(56,189,248,0.08), transparent 50%)'
            }}
          />
          
          <div className="absolute bottom-[-1rem] left-1/2 aspect-square w-[100vw] max-w-[700px] -translate-x-1/2 opacity-20 pointer-events-none sm:bottom-0 sm:w-[420px] sm:max-w-[420px]">
            <Globe className="pointer-events-auto" />
          </div>
        </div>

        {/* Section Header */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex-shrink-0 mb-8 sm:mb-0">
          <p className="SecondaryFont text-xs tracking-[0.25em] text-gray-500 uppercase mb-2">
            Handcrafted Works
          </p>
          <h1 className="PrimaryFont OrangeGradient text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            PROJECTS
          </h1>
          <div className="w-16 h-px bg-white/10 mx-auto mt-4 mb-2" />
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto SecondaryFont leading-relaxed">
            Featured applications & backend systems built with modern scalability.
          </p>
        </div>

        {/* Desktop: Scroll-driven Horizontal Motion / Mobile: Clean Vertical Stack */}
        <div className="relative z-10 w-full sm:my-auto flex items-center">
          
          {/* Desktop/Tablet: Motion Horizontal Track driven by scroll */}
          <div className="hidden sm:block w-full overflow-hidden">
            <motion.div 
              style={{ x }} 
              className="flex gap-6 sm:gap-8 px-8 sm:px-16 w-max"
            >
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.name || idx}
                  index={idx}
                  title={project.title}
                  description={project.description}
                  repoLink={project.repoLink}
                  liveLink={project.liveLink}
                  technologies={project.technologies}
                  stars={project.stars}
                  forks={project.forks}
                />
              ))}
            </motion.div>
          </div>

          {/* Small Screen: Clean vertical grid list, perfectly natural to scroll */}
          <div className="sm:hidden grid grid-cols-1 gap-4 w-full max-w-md mx-auto">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.name || idx}
                index={idx}
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

        {/* Bottom Cue - visible on desktop only */}
        <div className="relative z-10 text-center hidden sm:flex items-center justify-center gap-3 text-xs text-gray-500 SecondaryFont uppercase tracking-widest">
          <span className="w-8 h-px bg-white/10" />
          <span>Horizontal Showcase</span>
          <span className="w-8 h-px bg-white/10" />
        </div>

      </div>
    </div>
  )
}

export default Project
