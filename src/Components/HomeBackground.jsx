import React, { lazy, Suspense } from "react";

const GradientASCII = lazy(() => import("./GradientASCII.jsx"));

const HomeBackground = ({ children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <Suspense fallback={null}>
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
          <GradientASCII
            colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.8}
            glyphOpacity={0.85}
            glow={0.2}
            depthOfField={0}
            flicker={0.2}
            softness={0.5}
            scale={1}
            flow={0.5}
            speed={1}
            gradientOpacity={0.9}
            grain={0.08}
            variation={0}
            mouseInteraction={false}
            scrambleRadius={0.1}
            clickEffect="wave"
            intro
            lightMode={false}
          />
        </div>
      </Suspense>

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default HomeBackground;
