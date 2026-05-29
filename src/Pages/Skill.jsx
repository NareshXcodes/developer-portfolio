import React from "react";
import {
  SiAmazonwebservices,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiJavascript,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFastapi
} from "react-icons/si";
import LogoLoop from "../Components/LogoLoop.jsx";

const Skill = ({ skills }) => {
  const iconClass = "text-[#cdcdcd]";
  const iconMap = {
    cpp: { node: <SiCplusplus className={iconClass} />, title: "C++" },
    py: { node: <SiPython className={iconClass} />, title: "Python" },
    java: { node: <SiOpenjdk className={iconClass} />, title: "Java" },
    git: { node: <SiGit className={iconClass} />, title: "Git" },
    github: { node: <SiGithub className={iconClass} />, title: "GitHub" },
    js: { node: <SiJavascript className={iconClass} />, title: "JavaScript" },
    react: { node: <SiReact className={iconClass} />, title: "React" },
    tailwind: { node: <SiTailwindcss className={iconClass} />, title: "Tailwind CSS" },
    aws: { node: <SiAmazonwebservices className={iconClass} />, title: "AWS" },
    FastAPI: { node: <SiFastapi className={iconClass} />, title: "FastAPI" },
  };

  const logos = skills.map(skill => iconMap[skill]).filter(Boolean);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          logoHeight={60}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
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
