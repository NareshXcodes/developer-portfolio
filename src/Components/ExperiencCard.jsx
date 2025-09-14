import React from "react";

const ExperiencCard = ({ title, company, time, description }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full max-w-sm lg:max-w-md h-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3 w-full">
        <img src={company} className="w-6 h-6 sm:w-8 sm:h-8 rounded object-cover flex-shrink-0" alt="Company logo" />
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="PrimaryFont IconGradient font-semibold text-base sm:text-lg truncate">{title}</h1>
          <p className="text-gray-400 SecondaryFont text-xs sm:text-sm">{time}</p>
        </div>
      </div>
      <p className="text-gray-300 SecondaryFont text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ExperiencCard;
