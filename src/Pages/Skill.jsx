import React, { useCallback } from "react";
import LogoLoop from "../Components/LogoLoop.jsx";

const Skill = ({ skills }) => {
  const iconTheme = "dark";
  const iconMap = {
    cpp: { icon: "cpp", title: "C++" },
    py: { icon: "python", title: "Python" },
    java: { icon: "java", title: "Java" },
    git: { icon: "git", title: "Git" },
    github: { icon: "github", title: "GitHub" },
    js: { icon: "javascript", title: "JavaScript" },
    react: { icon: "react", title: "React" },
    tailwind: { icon: "tailwind", title: "Tailwind CSS" },
    supabase: { icon: "supabase", title: "Supabase" },
    postgres: { icon: "postgresql", title: "PostgreSQL" },
    nodejs: { icon: "nodejs", title: "Node.js" },
    aws: { icon: "aws", title: "AWS" },
    fastapi: { icon: "fastapi", title: "FastAPI" }
  };

  const logos = skills.map(skill => iconMap[skill]).filter(Boolean);

  const renderSkillItem = useCallback(item => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5">
      <img
        src={`https://go-skill-icons.vercel.app/api/icons?i=${item.icon}&theme=${iconTheme}`}
        alt={item.title}
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        className="h-8 w-8 object-contain"
        style={{ willChange: 'auto' }}
      />
      <span className="SecondaryFont text-xs uppercase tracking-wider text-[#cdcdcd]">
        {item.title}
      </span>
    </div>
  ), [iconTheme]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative overflow-hidden p-20">
      {/* Background decorative elements - optimized for lag-free performance */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <h4 className="PrimaryFont text-transparent IconGradient bg-clip-text text-4xl font-bold mb-4 tracking-wider">
          EXPERIENCED WITH
        </h4>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] mx-auto mb-12 rounded-full"></div>
      </div>

      <div className="relative w-full flex justify-center overflow-hidden">
        <LogoLoop
          logos={logos}
          speed={90}
          direction="left"
          logoHeight={34}
          gap={24}
          hoverSpeed={40}
          renderItem={renderSkillItem}
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Technology skills"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Skill;
