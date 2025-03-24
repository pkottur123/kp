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
      {/* Left Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full w-fit flex items-center gap-2 text-sm"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4" />
          <span className="text-[#b49bff]">Business Intelligence Analyst</span>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 text-4xl md:text-6xl font-bold max-w-xl leading-tight tracking-tight relative"
        >
          {/* Layered Text Gradient */}
          <div className="relative w-fit">
            <h1 className="absolute text-white opacity-10 -top-1 -left-1 blur-md md:text-[58px] hidden md:block">
              Prasanna Kottur
            </h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 font-extrabold md:text-[58px]">
              Prasanna Kottur
            </h1>
          </div>

          <span className="text-white md:text-[56px] font-extrabold">Business</span>
          <span className="text-white md:text-[56px] font-extrabold">Intelligence</span>
          <span className="text-white md:text-[56px] font-extrabold">Analyst</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-4 md:my-5 max-w-[350px] md:max-w-[600px]"
        >
          I&apos;m a Business Analyst with experience in data analysis, process optimization, and requirement gathering. I specialize in turning complex business needs into actionable insights and solutions.
        </motion.p>

        {/* Resume Button */}
        <motion.a
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="py-2 px-5 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold text-sm md:text-lg rounded-lg w-fit hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Resume
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-5 md:mt-0"
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
