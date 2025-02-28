"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  // ✅ Function to open the resume
  const handleHireMeClick = () => {
    window.open("/Prasanna_Kottur_Business_Analyst..pdf", "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-20 mt-40 w-full z-[20]"
    >
      {/* Left Side: Image */}
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="w-1/2 flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>

      {/* Right Side: Text Content */}
      <div className="h-full w-1/2 flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[7px] border border-[#0279f7] opacity-[0.9] w-fit"
        >
          <SparklesIcon className="text-[#0279f7] mr-[20px] h-5 w-5" />
          <h1 className="Welcome-text text-[#ffffff]">Business Analyst</h1>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl font-bold text-white max-w-[500px]"
        >
          <span>
            I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-700">
              {" "} Prasanna Kottur {" "}
            </span>
            Business Analyst
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300"
        >
          I&apos;m a Analyst, I specialize in Business, Finance, Trading, and Data Analysis. Discover skills to see my work in action."
        </motion.p>

        {/* Resume Button */}
        <motion.button
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="py-2 px-5 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold text-lg rounded-lg max-w-[120px] hover:scale-105 transition-transform duration-300"
        >
          Resume
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroContent;
