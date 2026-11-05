import React, { useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

const CATEGORIES = [
  {
    id: "programming_languages",
    title: "Programming Languages",
    description: "The foundational languages I use to build robust logic, complex algorithms, and high-performance applications."
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Crafting interactive, responsive, and visually stunning user interfaces using modern web technologies and frameworks."
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Building scalable, secure, and highly-available server-side architectures and APIs."
  },
  {
    id: "database",
    title: "Database Architecture",
    description: "Designing and managing efficient data storage solutions, from relational databases to modern NoSQL systems."
  },
  {
    id: "Cloud & Tools",
    title: "Cloud & Tools",
    description: "Leveraging modern DevOps practices, cloud infrastructure, and version control to ensure seamless deployments and collaboration."
  }
];

const ICON_MAP = {
  cpp: { icon: "cpp", title: "programming_languages" },
  py: { icon: "python", title: "programming_languages" },
  java: { icon: "java", title: "programming_languages" },
  git: { icon: "git", title: "Cloud & Tools" },
  github: { icon: "github", title: "Cloud & Tools" },
  docker: { icon: "docker", title: "Cloud & Tools" },
  js: { icon: "javascript", title: "frontend" },
  react: { icon: "react", title: "frontend" },
  tailwind: { icon: "tailwind", title: "frontend" },
  supabase: { icon: "supabase", title: "database" },
  postgres: { icon: "postgresql", title: "database" },
  sqlite: { icon: "sqlite", title: "database" },
  nodejs: { icon: "nodejs", title: "backend" },
  aws: { icon: "aws", title: "Cloud & Tools" },
  fastapi: { icon: "fastapi", title: "backend" },
  pydantic: { icon: "pydantic", title: "backend" },
  sqlalchemy: { icon: "sqlalchemy", title: "backend" },
};

const Skill = ({ skills }) => {
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * CATEGORIES.length);
    if (index >= CATEGORIES.length) index = CATEGORIES.length - 1;
    if (index < 0) index = 0;
    if (index !== activeIndexRef.current) {
      activeIndexRef.current = index;
      setActiveIndex(index);
    }
  });

  const groupedSkills = useMemo(() => {
    const logos = skills.map((skill) => ICON_MAP[skill]).filter(Boolean);

    return CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = logos.filter((skill) => skill.title === cat.id);
      return acc;
    }, {});
  }, [skills]);

  const iconTheme = "dark";

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${CATEGORIES.length * 100}vh` }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a]">
        
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 12% 18%, rgba(168, 85, 247, 0.28), transparent 28%), radial-gradient(circle at 88% 82%, rgba(59, 130, 246, 0.24), transparent 32%)",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center h-[80vh]">
          
          {/* Left Side: Skills Grid */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center pr-0 md:pr-12 relative">
            <h4 className="PrimaryFont text-transparent IconGradient bg-clip-text text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-8 tracking-widest text-center md:text-left">
              EXPERIENCED WITH
            </h4>
            <div className="relative w-full min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-wrap gap-4 justify-center md:justify-start content-start"
                >
                  {groupedSkills[CATEGORIES[activeIndex].id]?.map((item, i) => (
                    <motion.div
                      key={item.icon}
                      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: prefersReducedMotion ? 0 : i * 0.03,
                        duration: prefersReducedMotion ? 0 : 0.2,
                      }}
                      className="flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:px-4 sm:py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-colors duration-300 w-16 h-16 sm:w-24 sm:h-24"
                    >
                      <img
                        src={`https://go-skill-icons.vercel.app/api/icons?i=${item.icon}&theme=${iconTheme}`}
                        alt={item.icon}
                        width={40}
                        height={40}
                        loading="lazy"
                        decoding="async"
                        className="h-7 w-7 sm:h-10 sm:w-10 object-contain drop-shadow-lg"
                      />
                      <span className="SecondaryFont text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#cdcdcd] text-center line-clamp-1">
                        {item.icon.replace(/-/g, ' ')}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Descriptions */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center pl-0 md:pl-12 border-t border-white/10 md:border-t-0 md:border-l relative">
            <div className="relative w-full min-h-[250px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -20 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
                  className="absolute inset-x-0"
                >
                  <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] rounded-full"></div>
                    <span className="text-gray-500 font-bold tracking-widest text-sm">0{activeIndex + 1} / 0{CATEGORIES.length}</span>
                  </div>
                  <h3 className="PrimaryFont text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-wide text-center md:text-left">
                    {CATEGORIES[activeIndex].title}
                  </h3>
                  <p className="SecondaryFont text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed text-center md:text-left px-4 md:px-0">
                    {CATEGORIES[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skill;
