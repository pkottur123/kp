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
    window.open("/Prasanna_Kottur_Business_Intelligence_Engineer.pdf", "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 mt-10 md:mt-16 w-full z-[20] gap-6 md:gap-10"
    >
      {/* Left Content (tighter spacing) */}
      <div className="h-full w-full max-w-[600px] flex flex-col gap-4 md:gap-5 justify-center text-start">
        {/* Sparkle Intro Box (smaller) */}
        <motion.div
          variants={slideInFromTop}
          className="py-[4px] px-[6px] border border-[#7042f88b] opacity-90 flex items-center w-fit rounded-md"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-4 w-4" />
          <h1 className="text-xs md:text-sm text-white">Business Intelligence Analyst</h1>
        </motion.div>

        {/* Name & Role (smaller text) */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
            Prasanna Kottur
          </h2>

          <div className="relative w-fit">
            <span className="text-[34px] md:text-[46px] text-white block">Business</span>
            <span className="text-[34px] md:text-[46px] text-white block">Intelligence</span>
            <span className="text-[34px] md:text-[46px] font-extrabold text-white block tracking-wide">
              Analyst
            </span>
          </div>
        </motion.div>

        {/* Description (narrower & smaller) */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[13px] md:text-base text-gray-300 max-w-[520px] mt-2"
        >
          I&apos;m a Business Analyst with experience in data analysis, process
          optimization, and requirement gathering. I specialize in turning
          complex business needs into actionable insights and solutions.
        </motion.p>

        {/* Resume Button (compact) */}
        <motion.a
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="mt-3 inline-block py-1.5 px-3.5 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs md:text-sm font-semibold rounded-md hover:scale-[1.03] transition-transform duration-300 shadow-sm cursor-pointer w-fit"
        >
          Resume
        </motion.a>
      </div>

      {/* Right Image (smaller on both breakpoints) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-6 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          width={360}
          height={360}
          className="w-[180px] h-[180px] md:w-[360px] md:h-[360px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
