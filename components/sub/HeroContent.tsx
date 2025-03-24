"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const handleHireMeClick = () => {
    window.open("/Prasanna_Kottur.pdf", "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-6 justify-center text-start">
        {/* Sparkle Intro Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[5px] border border-[#7042f88b] opacity-[0.9] flex items-center w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] h-5 w-5" />
          <h1 className="Welcome-text text-sm text-white">Business Intelligence Analyst</h1>
        </motion.div>

        {/* Name & Role */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 text-4xl md:text-6xl font-bold text-white leading-tight max-w-xl"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
            Prasanna Kottur
          </h2>

          <div className="relative w-fit">
            <span className="text-[44px] md:text-[60px] text-white block">Business</span>
            <span className="text-[44px] md:text-[60px] text-white block">Intelligence</span>
            <span className="text-[44px] md:text-[60px] font-extrabold text-white block tracking-wide">
              Analyst
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-300 max-w-lg mt-4"
        >
          I&apos;m a Business Analyst with experience in data analysis, process optimization, and requirement gathering. I specialize in turning complex business needs into actionable insights and solutions.
        </motion.p>

        {/* Resume Button */}
        <motion.a
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="mt-4 inline-block py-2 px-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold text-sm md:text-lg rounded-lg hover:scale-76 transition-transform duration-300 shadow-md cursor-pointer"
        >
          Resume
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          className="w-[250px] h-[250px] md:w-[500px] md:h-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
