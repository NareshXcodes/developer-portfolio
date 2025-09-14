import React from "react";
import { FaReact, FaJava, FaGithub, FaGitAlt, FaJs } from "react-icons/fa";
import { SiCplusplus, SiKotlin, SiAndroidstudio, SiTailwindcss, SiJavascript } from "react-icons/si";

const Skill = () => {
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
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl backdrop-blur-sm border border-yellow-500/30 shadow-xl group-hover:shadow-yellow-500/30">
              <SiJavascript className="text-yellow-400 drop-shadow-lg" size={48} title="JavaScript" />
            </div>
            <span className="SecondaryFont text-yellow-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">JavaScript</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl backdrop-blur-sm border border-blue-500/30 shadow-xl group-hover:shadow-blue-500/30">
              <SiCplusplus className="text-blue-400 drop-shadow-lg" size={48} title="C++" />
            </div>
            <span className="SecondaryFont text-blue-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">C++</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl backdrop-blur-sm border border-orange-500/30 shadow-xl group-hover:shadow-orange-500/30">
              <FaJava className="text-orange-400 drop-shadow-lg" size={48} title="Java" />
            </div>
            <span className="SecondaryFont text-orange-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Java</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl backdrop-blur-sm border border-purple-500/30 shadow-xl group-hover:shadow-purple-500/30">
              <SiKotlin className="text-purple-400 drop-shadow-lg" size={48} title="Kotlin" />
            </div>
            <span className="SecondaryFont text-purple-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Kotlin</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-xl backdrop-blur-sm border border-green-500/30 shadow-xl group-hover:shadow-green-500/30">
              <SiAndroidstudio className="text-green-400 drop-shadow-lg" size={48} title="Android Studio" />
            </div>
            <span className="SecondaryFont text-green-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Android</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-teal-600/20 rounded-xl backdrop-blur-sm border border-cyan-500/30 shadow-xl group-hover:shadow-cyan-500/30">
              <SiTailwindcss className="text-cyan-400 drop-shadow-lg" size={48} title="Tailwind CSS" />
            </div>
            <span className="SecondaryFont text-cyan-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Tailwind</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl backdrop-blur-sm border border-orange-500/30 shadow-xl group-hover:shadow-orange-500/30">
              <FaGitAlt className="text-orange-400 drop-shadow-lg" size={48} title="Git" />
            </div>
            <span className="SecondaryFont text-orange-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Git</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-xl backdrop-blur-sm border border-gray-500/30 shadow-xl group-hover:shadow-gray-400/30">
              <FaGithub className="text-white drop-shadow-lg" size={48} title="GitHub" />
            </div>
            <span className="SecondaryFont text-gray-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">GitHub</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl backdrop-blur-sm border border-blue-500/30 shadow-xl group-hover:shadow-blue-400/30">
              <FaReact className="text-blue-400 drop-shadow-lg" size={48} title="React" />
            </div>
            <span className="SecondaryFont text-blue-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">React</span>
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl backdrop-blur-sm border border-yellow-500/30 shadow-xl group-hover:shadow-yellow-500/30">
              <SiJavascript className="text-yellow-400 drop-shadow-lg" size={48} title="JavaScript" />
            </div>
            <span className="SecondaryFont text-yellow-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">JavaScript</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl backdrop-blur-sm border border-blue-500/30 shadow-xl group-hover:shadow-blue-500/30">
              <SiCplusplus className="text-blue-400 drop-shadow-lg" size={48} title="C++" />
            </div>
            <span className="SecondaryFont text-blue-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">C++</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl backdrop-blur-sm border border-orange-500/30 shadow-xl group-hover:shadow-orange-500/30">
              <FaJava className="text-orange-400 drop-shadow-lg" size={48} title="Java" />
            </div>
            <span className="SecondaryFont text-orange-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Java</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl backdrop-blur-sm border border-purple-500/30 shadow-xl group-hover:shadow-purple-500/30">
              <SiKotlin className="text-purple-400 drop-shadow-lg" size={48} title="Kotlin" />
            </div>
            <span className="SecondaryFont text-purple-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Kotlin</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-xl backdrop-blur-sm border border-green-500/30 shadow-xl group-hover:shadow-green-500/30">
              <SiAndroidstudio className="text-green-400 drop-shadow-lg" size={48} title="Android Studio" />
            </div>
            <span className="SecondaryFont text-green-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Android</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-teal-600/20 rounded-xl backdrop-blur-sm border border-cyan-500/30 shadow-xl group-hover:shadow-cyan-500/30">
              <SiTailwindcss className="text-cyan-400 drop-shadow-lg" size={48} title="Tailwind CSS" />
            </div>
            <span className="SecondaryFont text-cyan-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Tailwind</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl backdrop-blur-sm border border-orange-500/30 shadow-xl group-hover:shadow-orange-500/30">
              <FaGitAlt className="text-orange-400 drop-shadow-lg" size={48} title="Git" />
            </div>
            <span className="SecondaryFont text-orange-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Git</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-xl backdrop-blur-sm border border-gray-500/30 shadow-xl group-hover:shadow-gray-400/30">
              <FaGithub className="text-white drop-shadow-lg" size={48} title="GitHub" />
            </div>
            <span className="SecondaryFont text-gray-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">GitHub</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl backdrop-blur-sm border border-blue-500/30 shadow-xl group-hover:shadow-blue-400/30">
              <FaReact className="text-blue-400 drop-shadow-lg" size={48} title="React" />
            </div>
            <span className="SecondaryFont text-blue-300 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
