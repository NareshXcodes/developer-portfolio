import React, { useRef, useState } from "react";

const ExperiencCard = ({ title, company, time, description }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-start items-start w-full max-w-sm lg:max-w-md h-auto rounded-3xl overflow-hidden bg-[#161513]/80 border border-white/5 p-4 sm:p-8 shadow-2xl transition-all duration-300 group"
    >
      {/* Spotlight Effect overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-3xl z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,165,0,0.10), transparent 40%)`,
        }}
      />
      
      {/* Subtle border gradient on hover */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 rounded-3xl z-0"
        style={{
          boxShadow: `inset 0px 0px 0px 1px rgba(255,255,255,0.05)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4 mb-6 w-full">
        <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-white/20 transition-all duration-500 shadow-xl backdrop-blur-sm">
          <img src={company} className="w-full h-full rounded-xl object-contain drop-shadow-md" alt={`${title} logo`} />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="PrimaryFont text-white font-bold text-lg sm:text-xl truncate tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">{title}</h1>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <p className="text-gray-400 SecondaryFont text-xs sm:text-sm font-medium tracking-wider">{time}</p>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full mt-2">
        <p className="text-gray-400/90 SecondaryFont text-sm sm:text-base leading-relaxed text-left group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperiencCard;
