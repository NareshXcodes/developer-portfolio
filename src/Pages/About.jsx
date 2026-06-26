import React from "react";
import ExpCard from './../Components/ExperiencCard.jsx';
import awsLogo from './../assets/aws-logo.png';

const About = () => {

  const expCards = [
    {
      title:"AWS Intern" ,
      company : awsLogo ,
      time : "June 2025 - Jul 2025, 2mon",
      description : "Worked as a Cloud Intern and learned about AWS services like EC2, S3, Lambda, and CloudFormation. Gained hands-on experience in deploying and managing cloud infrastructure."
    },
    {
      title: "DevOps Intern",
      company: awsLogo,
      time : "May 2026 - July 2026, 3mon",
      description : "Learned about DevOps tools and practices, including CI/CD pipelines, containerization, and infrastructure automation. Gained hands-on experience in deploying and managing cloud infrastructure."
    }
  ]
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative pt-28 sm:pt-24 pb-12 border-t border-white/5 flex flex-col">
      {/* Header */}
      <div className="text-center mb-8 flex-shrink-0">
        <h1 className="PrimaryFont OrangeGradient text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          ABOUT ME
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-4 rounded-full opacity-80"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 min-h-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-stretch h-full">
          
          {/* About Text Section */}
          <div className="flex-1 lg:w-3/5 flex flex-col justify-start pb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 PrimaryFont tracking-wide">
              Who I Am
            </h2>
            <div className="space-y-6 text-gray-400 SecondaryFont text-base sm:text-lg leading-relaxed tracking-wide">
              <p>
                I am a backend-focused Computer Science student with hands-on experience building Scalable-Backend system and security-focused applications.
              </p>
              <p>
                I recently Won a 🥈 <span className="PrimaryFont text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-semibold drop-shadow-sm">1st Runner-Up</span> in <span className="PrimaryFont text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-semibold drop-shadow-sm">Web-Hunt (Dev Summit 2026)</span> organized by <span className="PrimaryFont text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold drop-shadow-sm">GDG on campus - Silicon University</span>, and I've developed production-oriented projects such as ArchTrack, It is a Architectural Decision Records Management platform where teams collaborate and tracks their software architecture decisions across teams and organizations and Orbital Guardian, a threat intelligence platform.
              </p>
              <p>
                My core strengths lie in REST API development, database design, cloud deployment, and modern software engineering practices. With a strong foundation in Data Structures & Algorithms, I am passionate about building scalable backend systems and solving real-world problems through technology.
              </p>
            </div>
            
            {/* Quick Skills Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['Backend Development', 'Cloud Infrastructure', 'REST APIs', 'System Design', 'RBAC'].map((skill, i) => (
                <span key={i} className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default shadow-lg backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Section - Timeline Layout */}
          <div className="flex-1 lg:w-2/5 flex flex-col w-full max-w-lg mx-auto lg:mx-0 h-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 PrimaryFont tracking-wide flex-shrink-0">
              Experience
            </h2>
            
            <div className="relative border-l border-white/10 ml-2 sm:ml-4 space-y-10 pb-12 flex-1 pr-4">
              {expCards.map((de, index) => (
                <div key={index} className="relative pl-6 sm:pl-10 group/timeline">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-6px] sm:left-[-6px] top-8 w-3 h-3 rounded-full bg-white/20 group-hover/timeline:bg-orange-500 transition-colors duration-500 shadow-[0_0_10px_rgba(249,115,22,0)] group-hover/timeline:shadow-[0_0_15px_rgba(249,115,22,0.8)] ring-4 ring-[#161513]"></div>
                  
                  {/* The Card */}
                  <ExpCard
                    title={de.title}
                    description={de.description}
                    company={de.company}
                    time={de.time}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
