import React from "react";
import ExpCard from './../Components/ExperiencCard.jsx';
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
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] relative overflow-hidden pt-20 border-t">
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
            <p className="SecondaryFont text-left IconGradient text-base sm:text-lg leading-relaxed">
              I am a second-year B.Tech student specializing in Android development
              with expertise in <b className="BlueGradient">Kotlin</b> and{" "}
              <b className="BlueGradient">Jetpack Compose</b>. My technical
              foundation encompasses{" "}
              <b>
                <i className="BlueGradient">Mobile Development</i>
              </b>
              ,{" "}
              <b>
                <i className="BlueGradient">Frontend technologies</i>
              </b>{" "}
              including <b>React</b>
              and <b>Tailwind CSS</b>, and <b>Cloud platforms</b> gained through{" "}
              <b className="OrangeGradient">AWS internship</b>
              experience and <b>Firebase</b> integration. I focus on delivering
              clean, scalable code and thrive in cross-functional teams where I can
              drive measurable impact. My approach combines strong data structures
              and algorithms fundamentals with practical development experience to
              create maintainable mobile solutions.
            </p>
          </div>

          {/* Experience Section */}
          <div className="flex-1 w-full lg:w-auto lg:max-w-md mt-8 lg:mt-0">
            <h1 className="BlueGradient text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-center PrimaryFont">
              EXPERIENCE
            </h1>
            
            <div 
              className="flex flex-col gap-4 sm:gap-6 max-h-80 sm:max-h-96 overflow-y-auto scroll-smooth hide-scrollbar pr-2"
            >
              {expCards.map((de, index) => (
                <ExpCard
                  key={index}
                  title={de.title}
                  description={de.description}
                  company={de.company}
                  time={de.time}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
