import React, { lazy, Suspense, useEffect, useState } from "react";

const GradientASCII = lazy(() => import("./GradientASCII.jsx"));

const HomeBackground = ({ children }) => {
  const [showEffect, setShowEffect] = useState(false);
  const [isConstrained, setIsConstrained] = useState(false);

  useEffect(() => {
    const constrainedDevice = window.matchMedia(
      '(max-width: 639px), (pointer: coarse), (prefers-reduced-motion: reduce)'
    ).matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    setIsConstrained(constrainedDevice);
    setShowEffect(!reducedMotion);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {showEffect && (
        <Suspense fallback={null}>
          <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
            <GradientASCII
              colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
              shape="horizon"
              characters=" =+xX0S8#@"
              cellSize={isConstrained ? 26 : 18}
              density={isConstrained ? 0.6 : 0.8}
              glyphOpacity={isConstrained ? 0.65 : 0.85}
              glow={isConstrained ? 0.1 : 0.2}
              depthOfField={0}
              flicker={isConstrained ? 0.05 : 0.2}
              softness={0.5}
              scale={1}
              flow={isConstrained ? 0.25 : 0.5}
              speed={isConstrained ? 0.5 : 1}
              gradientOpacity={isConstrained ? 0.7 : 0.9}
              grain={isConstrained ? 0.02 : 0.08}
              variation={0}
              mouseInteraction={false}
              scrambleRadius={0.1}
              clickEffect="wave"
              intro
              dpr={isConstrained ? 1 : undefined}
              lightMode={false}
            />
          </div>
        </Suspense>
      )}

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default HomeBackground;
