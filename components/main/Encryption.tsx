"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full bg-black">
      <div className="absolute w-auto h-auto top-0 z-[5]"></div> {/* Ensures full black background */}

      <div className="text-[60px] font-medium text-center text-white">
        <motion.div
          variants={slideInFromTop}
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700"
        >
          Cyber  Security
        </motion.div>
      </div>

      

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300"></div>
      </div>

        <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto opacity-10" // Hides the video if it's causing the blue tint
          src="/video1.webm/"
        />
      </div> 
    </div>
  );
};

export default Encryption;


