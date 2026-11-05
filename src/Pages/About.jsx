import React from "react";
import ExpCard from './../Components/ExperiencCard.jsx';
import awsLogo from './../assets/aws-logo.png';
import { GitHubCalendar } from 'react-github-calendar';

const expCards = [
  {
    title: "AWS Intern",
    company: awsLogo,
    time: "June 2025 – Jul 2025 · 2 months",
    description:
      "Worked as a Cloud Intern learning EC2, S3, Lambda, and CloudFormation. Gained hands-on experience deploying and managing cloud infrastructure.",
  },
  {
    title: "DevOps Intern",
    company: awsLogo,
    time: "May 2026 – July 2026 · 3 months",
    description:
      "Learned CI/CD pipelines, containerisation, and infrastructure automation. Gained hands-on experience deploying and managing cloud infrastructure.",
  },
];

const PILLS = ["Backend Development", "Cloud Infrastructure", "REST APIs", "System Design"];

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#0a0a0a] relative pt-24 pb-16 border-t border-white/5">

      {/* ── Section Header ── */}
      <div className="text-center mb-12 px-6">
        <p className="SecondaryFont text-xs tracking-[0.25em] text-gray-500 uppercase mb-3">Get to know me</p>
        <h1 className="PrimaryFont OrangeGradient text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          ABOUT ME
        </h1>
        <div className="w-16 h-px bg-white/10 mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Bio + pills ── */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="PrimaryFont text-white text-2xl sm:text-3xl font-bold mb-5 tracking-wide">
                Who I Am
              </h2>
              <div className="space-y-5 SecondaryFont text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I am a backend-focused Computer Science student with hands-on experience building
                  scalable backend systems and security-focused applications.
                </p>
                <p>
                  I recently won a 🥈{" "}
                  <span className="PrimaryFont text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-semibold">
                    1st Runner-Up
                  </span>{" "}
                  in{" "}
                  <span className="PrimaryFont text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-semibold">
                    Web-Hunt (Dev Summit 2026)
                  </span>{" "}
                  organised by{" "}
                  <span className="PrimaryFont text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                    GDG on campus – Silicon University
                  </span>
                  . I've built production-oriented projects like{" "}
                  <span className="text-white font-medium">ArchTrack</span> (an Architectural
                  Decision Records platform) and{" "}
                  <span className="text-white font-medium">Orbital Guardian</span> (a threat
                  intelligence platform).
                </p>
                <p>
                  My core strengths lie in REST API development, database design, cloud deployment,
                  and modern software engineering practices.
                </p>
              </div>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-gray-300 bg-white/[0.03] hover:bg-white/8 hover:border-white/20 transition-colors duration-200 cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Experience timeline */}
            <div>
              <h2 className="PrimaryFont text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 text-xl sm:text-2xl font-bold mb-6 tracking-wide">
                Experience
              </h2>
              <div className="relative border-l border-white/10 ml-3 space-y-8">
                {expCards.map((card, i) => (
                  <div key={i} className="relative pl-8 group/tl">
                    {/* dot */}
                    <span className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-white/15 ring-4 ring-[#0a0a0a] group-hover/tl:bg-orange-500 transition-colors duration-300" />
                    <ExpCard
                      title={card.title}
                      description={card.description}
                      company={card.company}
                      time={card.time}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Stats & Activity ── */}
          <div className="flex flex-col gap-6 lg:pt-2">

            {/* Label */}
            <h2 className="PrimaryFont text-white text-2xl sm:text-3xl font-bold tracking-wide">
              Stats &amp; Activity
            </h2>

            {/* LeetCode Stats Card */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
              <div className="px-5 pt-4 pb-2">
                <p className="SecondaryFont text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  LeetCode · nrsh_08
                </p>
              </div>
              <div className="px-4 pb-4">
                <img
                  src="https://leetcode-stats-six.vercel.app?username=nrsh_08&theme=dark&width=500"
                  alt="LeetCode stats for nrsh_08"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* GitHub Activity Graph */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
              <div className="px-5 pt-4 pb-2">
                <p className="SecondaryFont text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  GitHub Activity · NareshXcodes
                </p>
              </div>
              <div className="px-4 pb-4 overflow-x-auto">
                <div className="w-full min-w-0">
                  <GitHubCalendar
                    username="NareshXcodes"
                    colorScheme="dark"
                    fontSize={12}
                    blockSize={11}
                    blockMargin={4}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
