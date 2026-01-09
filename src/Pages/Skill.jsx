import React from "react";


const Skill = ({skills}) => {
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
        {/* Enhanced glassy overlays - made completely invisible */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0a0a0a] via-[#16151350] to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0a0a0a] via-[#16151350] to-transparent pointer-events-none z-20"></div>

        <div className="flex flex-row flex-nowrap gap-12 animate-scroll-x min-w-max py-8">
          {skills.map((skill,index)=>(
            <div key={index} className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-950/30 rounded-xl backdrop-blur-sm border-none shadow-lg group-hover:shadow-blue-500/40 transition-shadow duration-300">
              <a href="https://skillicons.dev">
                <img src={`https://skillicons.dev/icons?i=${skill}`} width="60" height="60" alt={skill} />
              </a>
            </div>
            <span className="SecondaryFont text-gray-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">{skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
