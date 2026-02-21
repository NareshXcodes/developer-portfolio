import React from "react";
import avatar from "./../assets/avatar.png";
import HomeBackground from './../Components/HomeBackground.jsx';

const Home = () => {
  return (
    <div style={{ width: '100%', height: '98vh', position: 'relative' }}>
      <HomeBackground
        mouseRepulsion={false}
        mouseInteraction
        density={1.1}
        glowIntensity={0.4}
        saturation={0.7}
        hueShift={200}
        twinkleIntensity={0.5}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={1.1}
        speed={0.6}
        style={{
          background: 'linear-gradient(to bottom right, #0a0a0a, #161513, #1a1a1a)'
        }}
      >
        <div className="min-h-screen w-screen relative overflow-hidden pt-20">
          <div className="flex items-center justify-center h-full py-16">
            <div className="max-w-6xl mx-auto px-6 -mt-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Side - Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="SecondaryFont text-gray-300 text-xl mb-4">
                    Hello, I'm
                  </h2>

                  <h1 className="PrimaryFont PrimaryGradient text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    Naresh Mahapatra
                  </h1>

                  <h3 className="PrimaryFont IconGradient text-2xl lg:text-3xl font-bold mb-8 leading-relaxed">
                    I write bugs so
                    <br />
                    I can fix them!
                  </h3>

                  <p className="SecondaryFont text-gray-300 text-lg leading-relaxed max-w-xl">
                    I'm a passionate <span className="BlueGradient font-semibold">Computer Science student</span>{" "}
                    eager to learn and grow in the world of technology. Currently exploring{" "}
                    <span className="BlueGradient font-semibold">Frontend</span> and{" "}
                    <span className="OrangeGradient font-semibold">Android development</span>{" "}
                    to build creative and user-friendly digital solutions.
                  </p>
                </div>

                {/* Right Side - Avatar */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <img
                    src={avatar}
                    alt="Naresh Mahapatra"
                    className="h-40vh w-44vw lg:h-40vh lg:w-40vw rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeBackground>
    </div>
  );
};

export default Home;
