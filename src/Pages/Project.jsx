import React, { useEffect, useRef, useState } from 'react'
import BounceCards from '../Components/BounceCards'
import Globe from '../Components/Globe'
import ProjectCard from '../Components/ProjectCard'

const Project = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const repoNames = [
      "ArchTrack",
      "Personal-Finance-Manager-API",
      "developer-portfolio",
      "Orbital-Guardian",
    ];

    Promise.all(
        repoNames.map((repoName) =>
            fetch(`https://api.github.com/repos/NareshXcodes/${repoName}`)
                .then((res) => res.json())
        )
      )
        .then((repos) => {
          const fetchedProjects = repos.map((repo) => ({
            title: repo.name.replace(/[-_]/g, " "),
            description: repo.description || "No description available.",
            repoLink: repo.html_url,
            liveLink: repo.homepage || "",
            technologies: [repo.language, ...(repo.topics || [])]
                .filter(Boolean)
                .slice(0, 4),
            stars: repo.stargazers_count,
            forks: repo.forks_count,
          }));

          setProjects(fetchedProjects);
        })
        .catch((err) => console.error("Error fetching GitHub repos:", err));
    }, []);



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
      className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative pt-28 sm:pt-24 pb-8 flex flex-col"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(255,134,96,0.18), transparent 45%), radial-gradient(circle at 85% 10%, rgba(154,51,255,0.16), transparent 40%), radial-gradient(circle at 70% 80%, rgba(91,173,255,0.14), transparent 45%)'
          }}
        />
        <div className="absolute bottom-0 left-1/2 w-[60vw] min-w-[320px] max-w-[800px] -translate-x-1/2 opacity-100">
          <div className="relative w-full overflow-hidden rounded-t-[999px] aspect-[2/1]">
            <div className="absolute left-0 top-0 w-full aspect-square">
              <div className="relative h-full w-full pointer-events-auto">
                <Globe className="max-w-none opacity-80" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute -top-24 left-8 h-64 w-64 rounded-full bg-[#FF8660]/20 blur-3xl"
        />
        <div
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#9A33FF]/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col min-h-0">
        {/* Header */}
        <div className="text-center mb-2 md:mb-6 flex-shrink-0">
          <h1 className="OrangeGradient text-4xl font-bold mb-2 md:mb-4 PrimaryFont tracking-wide">PROJECTS</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4 SecondaryFont">
            Here are some of my recent projects. Click on any card to view the repository on GitHub.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="flex-1 flex flex-col justify-center w-full min-h-0 relative">
          
          {/* Desktop/Tablet BounceCards View */}
          <div className="hidden md:flex flex-1 justify-center px-6 items-center min-h-0">
            {isVisible ? (
              <BounceCards
                className="origin-center scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100"
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
                containerHeight={440}
              />
            ) : (
              <div
                className="origin-center scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100"
                style={{ width: 900, height: 440 }}
                aria-hidden="true"
              />
            )}
          </div>

          {/* Mobile Horizontal Scroll View */}
          <div className="flex md:hidden overflow-x-auto gap-6 px-6 py-4 snap-x snap-mandatory hide-scrollbar w-full items-center">
            {projects.map((project, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[85vw] max-w-[340px] h-[420px] flex justify-center">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  repoLink={project.repoLink}
                  liveLink={project.liveLink}
                  technologies={project.technologies}
                  stars={project.stars}
                  forks={project.forks}
                />
              </div>
            ))}
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-2 flex-shrink-0 pb-4 z-20">
          <p className="text-gray-400 mb-2 md:mb-4 SecondaryFont">Want to see more of my work?</p>
          <a
            href="https://github.com/NareshXcodes" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Repositories →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project