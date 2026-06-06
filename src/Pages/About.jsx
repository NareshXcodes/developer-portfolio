import React from "react";
import ExpCard from './../Components/ExperiencCard.jsx';
import ScrollStack, { ScrollStackItem } from '../Components/ScrollStack.jsx';
import awsLogo from './../assets/aws-logo.png';
import webLogo from './../assets/web-logo.png';

const About = () => {

  const expCards = [
    {
      title:"AWS Intern" ,
      company : awsLogo ,
      time : "June 2025 - jul 2025, 2mon",
      description : "Worked as a Cloud Intern and learned about AWS services like EC2, S3, Lambda, and CloudFormation. Gained hands-on experience in deploying and managing cloud infrastructure."
    },
    {
      title:"Web Developer Intern" ,
      company: webLogo,
      time : "Sep 2024 - Nov 2024, 3mon",
      description : "Contributed to front-end development using React and Tailwind CSS. Collaborated with the design team to implement responsive UI components and enhance user experience."
    }
  ]
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative overflow-hidden pt-20 border-t">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="PrimaryFont OrangeGradient text-3xl sm:text-4xl font-bold">
          ABOUT ME
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* About Text Section */}
          <div className="flex-1 w-full lg:w-auto">
            <p className="SecondaryFont text-left IconGradient text-base sm:text-lg leading-relaxed mt-10 tracking-wider font-bold justify-center items-center">
              Backend-focused Computer Science student with hands-on experience building full-stack and security-focused applications using <span className="PrimaryFont PrimaryGradient text-md">FastAPI, Python, PostgreSQL, SQLAlchemy </span>,<span className="PrimaryFont BlueGradient text-md">React.js </span>, and <span className="PrimaryFont OrangeGradient text-md">AWS services</span>. Completed an AWS internship and developed production-oriented projects including Orbital Guardian, a threat intelligence and risk assessment platform, and a Personal Finance Manager API. Skilled in REST API development, database design, cloud deployment, frontend-backend integration, and modern software engineering practices. Strong foundation in Data Structures & Algorithms and passionate about building scalable backend systems and solving real-world problems through technology.
            </p>
          </div>

          {/* Experience Section */}
          <div className="flex-1 w-full lg:w-auto lg:max-w-md mt-8 lg:mt-0">
            <h1 className="BlueGradient text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-center PrimaryFont">
              EXPERIENCE
            </h1>
            <ScrollStack
              className="w-full h-[20rem] sm:h-96 hide-scrollbar"
              itemDistance={100}
              itemScale={0.03}
              itemStackDistance={50}
              stackPosition="20%"
              scaleEndPosition="0%"
              baseScale={0.85}
              useWindowScroll={false}
            >
              {expCards.map((de, index) => (
                <ScrollStackItem key={index} itemClassName="mb-4">
                  <ExpCard
                    title={de.title}
                    description={de.description}
                    company={de.company}
                    time={de.time}
                  />
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
