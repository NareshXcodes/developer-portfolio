import React from "react";
import avatar from "./../assets/avatar.png";
const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#161513] relative">
      {/* Hello section - better positioning */}
      <div className="absolute left-8 top-[100px] animate-fade-in-left">
        <h1 className="SecondaryFont PrimaryGradient text-5xl font-bold text-left leading-tight">
          Hello, I'm
          <br />
          Naresh Mahapatra
        </h1>
      </div>

      {/* Avatar - centered better */}
      <img src={avatar} className="h-[200px] w-[230px] rounded-full mb-6 drop-shadow-xl animate-fade-in-up hover:scale-105 transition-transform duration-300" />
      
      {/* Main tagline */}
      <h1 className="PrimaryFont PrimaryGradient text-3xl font-bold text-center leading-relaxed animate-fade-in-up animation-delay-300">
        I write bugs so
        <br />
        I can Fix them!
      </h1>

      {/* Description - better spacing and readability */}
      <p className="SecondaryFont text-center text-[#C5C5C5] max-w-md mt-8 leading-relaxed animate-fade-in-up animation-delay-600">
        I'm a passionate <span className="text-white font-semibold">Computer Science student</span>{" "}
        eager to learn and grow in the world of technology. Currently exploring{" "}
        <span className="text-white font-semibold">frontend</span> and{" "}
        <span className="text-white font-semibold italic">Android development</span>{" "}
        to build creative and user-friendly digital solutions.
      </p>

    </div>
  );
};

export default Home;
