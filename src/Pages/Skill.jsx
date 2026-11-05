import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const CATEGORIES = [
  {
    id: "programming_languages",
    title: "Languages",
    description:
      "Foundational languages I use to build robust logic, complex algorithms, and high-performance applications.",
  },
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Crafting interactive, responsive, and visually stunning user interfaces with modern web technologies.",
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Building scalable, secure, and highly-available server-side architectures and REST APIs.",
  },
  {
    id: "database",
    title: "Database",
    description:
      "Designing and managing efficient data-storage solutions, from relational databases to modern cloud stores.",
  },
  {
    id: "Cloud & Tools",
    title: "Cloud & Tools",
    description:
      "Leveraging DevOps practices, cloud infrastructure, and version control for seamless deployments.",
  },
];

const ICON_MAP = {
  cpp:        { icon: "cpp",        title: "programming_languages" },
  py:         { icon: "python",     title: "programming_languages" },
  java:       { icon: "java",       title: "programming_languages" },
  git:        { icon: "git",        title: "Cloud & Tools" },
  github:     { icon: "github",     title: "Cloud & Tools" },
  docker:     { icon: "docker",     title: "Cloud & Tools" },
  js:         { icon: "javascript", title: "frontend" },
  react:      { icon: "react",      title: "frontend" },
  tailwind:   { icon: "tailwind",   title: "frontend" },
  supabase:   { icon: "supabase",   title: "database" },
  postgres:   { icon: "postgresql", title: "database" },
  sqlite:     { icon: "sqlite",     title: "database" },
  nodejs:     { icon: "nodejs",     title: "backend" },
  aws:        { icon: "aws",        title: "Cloud & Tools" },
  fastapi:    { icon: "fastapi",    title: "backend" },
  pydantic:   { icon: "pydantic",   title: "backend" },
  sqlalchemy: { icon: "sqlalchemy", title: "backend" },
};

const ICON_THEME = "dark";

const Skill = ({ skills }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  const groupedSkills = useMemo(() => {
    const logos = skills.map((s) => ICON_MAP[s]).filter(Boolean);
    return CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = logos.filter((s) => s.title === cat.id);
      return acc;
    }, {});
  }, [skills]);

  const active = CATEGORIES[activeIndex];
  const icons = groupedSkills[active.id] ?? [];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border-t border-white/5 flex flex-col items-center justify-center py-20 px-6">

      {/* ── Section Header ── */}
      <div className="text-center mb-12 w-full">
        <p className="SecondaryFont text-xs tracking-[0.25em] text-gray-500 uppercase mb-3">What I work with</p>
        <h1 className="PrimaryFont PrimaryGradient text-4xl sm:text-5xl md:text-6xl font-extrabold">
          SKILLS
        </h1>
        <div className="w-16 h-px bg-white/10 mx-auto mt-6" />
      </div>

      {/* ── Bento Container ── */}
      <div className="w-full max-w-6xl">

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(i)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 SecondaryFont
                ${activeIndex === i
                  ? "text-white border border-white/20 bg-white/8"
                  : "text-gray-500 border border-transparent hover:text-gray-300 hover:border-white/10"
                }`}
            >
              {cat.title}
              {activeIndex === i && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/15 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">

          {/* Left: Category info card — spans 2 cols */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-info"}
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:col-span-2 rounded-2xl border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gradient-to-r from-white/40 to-transparent" />
                  <span className="SecondaryFont text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="PrimaryFont text-white text-3xl sm:text-4xl font-bold leading-tight mb-4 tracking-wide">
                  {active.title}
                </h2>
                <p className="SecondaryFont text-gray-400 text-sm sm:text-base leading-relaxed">
                  {active.description}
                </p>
              </div>

              {/* skill count badge */}
              <div className="mt-8 inline-flex items-center gap-2 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="SecondaryFont text-xs text-gray-500">
                  {icons.length} {icons.length === 1 ? "technology" : "technologies"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Icon grid — spans 3 cols */}
          <div className="lg:col-span-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6 min-h-[280px] flex flex-col">
            <p className="SecondaryFont text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
              Technologies
            </p>
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + "-icons"}
                  initial={prefersReduced ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={prefersReduced ? undefined : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-wrap gap-3 content-start"
                >
                  {icons.length === 0 ? (
                    <p className="SecondaryFont text-gray-600 text-sm self-center mx-auto mt-8">
                      No items in this category.
                    </p>
                  ) : (
                    icons.map((item, i) => (
                      <motion.div
                        key={item.icon}
                        initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: prefersReduced ? 0 : i * 0.04,
                          duration: 0.18,
                        }}
                        className="flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/18 transition-all duration-200 group cursor-default"
                      >
                        <img
                          src={`https://go-skill-icons.vercel.app/api/icons?i=${item.icon}&theme=${ICON_THEME}`}
                          alt={item.icon}
                          width={36}
                          height={36}
                          loading="lazy"
                          decoding="async"
                          className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-200"
                        />
                        <span className="SecondaryFont text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500 group-hover:text-gray-300 transition-colors duration-200 text-center leading-none px-1">
                          {item.icon.replace(/-/g, " ")}
                        </span>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom nav dots */}
        <div className="flex justify-center gap-2 mt-8">
          {CATEGORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-white/60 w-5" : "bg-white/15 hover:bg-white/30"
              }`}
              aria-label={CATEGORIES[i].title}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skill;
