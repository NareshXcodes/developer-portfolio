import React from "react";
import avatar from "./../assets/avatar.jpeg";
import HomeBackground from './../Components/HomeBackground.jsx';

const Home = () => {
  return (
    <div className="w-full min-h-screen relative">
      <HomeBackground>
        <div className="h-full w-full relative flex items-center justify-center pt-24 sm:pt-20 pb-12 sm:pb-0">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
                <h2 className="SecondaryFont text-gray-300 text-lg sm:text-xl mb-4">
                  Hello, I'm
                </h2>

                <h1 className="PrimaryFont PrimaryGradient text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Naresh Mahapatra
                </h1>

                <h3 className="PrimaryFont IconGradient text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 leading-relaxed">
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
                  className="w-40 h-40 sm:w-64 sm:h-64 lg:h-[45vh] lg:w-[45vh] rounded-full object-cover shadow-2xl ring-4 ring-white/5"
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
