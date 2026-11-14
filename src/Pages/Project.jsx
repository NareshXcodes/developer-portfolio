import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'

const PROJECTS = [
  'ArchTrack',
  'Personal-Finance-Manager-API',
  'developer-portfolio'
]

const FALLBACK_PROJECTS = [
  {
    name: 'ArchTrack',
    title: 'ArchTrack',
    description: 'A collaborative platform for documenting, reviewing, voting on, and tracking software architecture decisions across engineering teams.',
    repoLink: 'https://github.com/NareshXcodes/ArchTrack',
    liveLink: '',
    technologies: ['Python', 'architecture-decision-records', 'fastapi'],
    stars: 0,
    forks: 0,
  },
  {
    name: 'Personal-Finance-Manager-API',
    title: 'Personal Finance Manager API',
    description: 'Backend API for a personal finance manager application, built with a focus on clear and maintainable service boundaries.',
    repoLink: 'https://github.com/NareshXcodes/Personal-Finance-Manager-API',
    liveLink: '',
    technologies: ['Python'],
    stars: 0,
    forks: 0,
  },
  {
    name: 'developer-portfolio',
    title: 'Developer Portfolio',
    description: 'Modern, responsive portfolio website built with React and Vite to showcase projects and engineering experience.',
    repoLink: 'https://github.com/NareshXcodes/developer-portfolio',
    liveLink: '',
    technologies: ['JavaScript', 'React', 'Tailwind CSS'],
    stars: 0,
    forks: 0,
  },
]

const Project = () => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [projects, setProjects] = useState(FALLBACK_PROJECTS)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    if (!isVisible) return undefined

    const controller = new AbortController()

    Promise.allSettled(
      PROJECTS.map(async (repoName) => {
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

      const fetchedProjects = new Map(
        results
          .filter(result => result.status === 'fulfilled' && result.value?.name)
          .map(result => {
            const repo = result.value
            return [repo.name, {
              name: repo.name,
              title: repo.name.replace(/[-_]/g, ' '),
              description: repo.description || 'No description available.',
              repoLink: repo.html_url,
              liveLink: repo.homepage || '',
              technologies: [repo.language, ...(repo.topics || []).slice(0, 2)].filter(Boolean),
              stars: repo.stargazers_count,
              forks: repo.forks_count,
            }]
          })
      )

      setFetchError(fetchedProjects.size !== PROJECTS.length)
      setProjects(FALLBACK_PROJECTS.map(project => fetchedProjects.get(project.name) || project))
    })

    return () => controller.abort()
  }, [isVisible])

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
      className="relative w-full bg-gradient-to-br from-[#0a0a0a] via-[#111114] to-[#0a0a0a] border-t border-white/5"
    >
      <div className="relative w-full overflow-hidden px-4 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
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
          {fetchError && (
            <p className="mt-3 text-xs text-gray-500 SecondaryFont" role="status">
              Some GitHub project details could not be loaded. Showing saved project information.
            </p>
          )}
        </div>

        <div className="relative z-10 grid w-full max-w-7xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
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
    </div>
  )
}

export default Project
