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
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[5px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="Welcome-text text-xs md:text-sm">Business Intelligence Analyst</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-5 text-4xl md:text-6xl font-bold text-white max-w-[300px] md:max-w-[500px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500">
              {" "}
              Prasanna Kottur{" "}
            </span>
            <br className="block md:hidden" /> {/* Adds a break on small screens */}
            Business Intelligence Analyst
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-4 md:my-5 max-w-[350px] md:max-w-[600px]"
        >
        I&apos;m a Business Analyst with experience in data analysis, process optimization, and requirement gathering. I specialize in turning complex business needs into actionable insights and solutions.
        </motion.p>
        <motion.a
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="py-2 px-4 md:px-5 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold text-sm md:text-lg rounded-lg max-w-[100px] md:max-w-[120px] hover:scale-105 transition-transform duration-300"
        >
          Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-5 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500} width={500} /* Reduced size for mobile */
          className="w-[250px] h-[250px] md:w-[500px] md:h-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
