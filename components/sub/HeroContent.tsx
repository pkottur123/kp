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
    window.open("/Prasanna_Kottur_Business_Analyst..pdf", "_blank");
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Business Analyst
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-5 mt-5 text-6xl font-bold text-white max-w-[500px] w-auto h-auto"
        >
          <span>
            
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500">
              {" "}
              Prasanna Kottur{" "}
            </span>
            Business Analyst
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Business Analyst with experience in data analysis, process optimization, and requirement gathering. I specialize in turning complex business needs into actionable insights and solutions.
        </motion.p>
        <motion.a
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="py-2 px-5 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold text-lg rounded-lg max-w-[120px] hover:scale-105 transition-transform duration-300"
        >
          Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
