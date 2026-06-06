import React from 'react';

const HomeBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#0a0a0a] overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)',
        }}
      />
      
      {/* Glowing Orbs (Aurora Effect) - Optimized for performance without mix-blend-mode and pulse animations */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-[100%] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/15 rounded-[100%] blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-orange-500/10 rounded-[100%] blur-[100px] pointer-events-none" />

      {/* Subtle Noise Texture for Glassmorphism */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default HomeBackground;