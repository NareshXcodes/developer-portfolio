import React from "react";
import avatar from "./../assets/avatar.jpeg";
import HomeBackground from './../Components/HomeBackground.jsx';

const Home = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <HomeBackground>
        <div className="h-full w-full relative flex items-center justify-center pt-16 sm:pt-12 pb-6 sm:pb-0 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">

              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="SecondaryFont text-gray-300 text-lg sm:text-xl mb-2">
                  Hello, I'm
                </h2>

                <h1 className="PrimaryFont PrimaryGradient text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                  Naresh Mahapatra
                </h1>

                <h3 className="PrimaryFont IconGradient text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 leading-relaxed">
                  I write bugs so
                  <br />
                  I can fix them!
                </h3>

                <p className="SecondaryFont text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Building scalable <span className="PrimaryFont PrimaryGradient">backend systems</span> and <span className="PrimaryFont PrimaryGradient">full-stack applications</span> with FastAPI, Node.js, PostgreSQL, React, and AWS. Passionate about software engineering, cloud technologies, and transforming ideas into impactful products that solve real-world challenges.
                </p>
              </div>

              {/* Right Side - Avatar */}
              <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last">
                <img
                  src={avatar}
                  alt="Naresh Mahapatra"
                  className="w-32 h-32 sm:w-48 sm:h-48 lg:h-[36vh] lg:w-[36vh] rounded-full object-cover shadow-2xl ring-4 ring-white/5"
                />
              </div>
            </div>
          </div>
        </div>
      </HomeBackground>
    </div>
  );
};

export default Home;