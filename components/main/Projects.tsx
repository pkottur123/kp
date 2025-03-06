"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  fullDetails: string;
}

const ProjectCard = ({ src, title, description, fullDetails }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Modal State:", isOpen); // ✅ Debug modal visibility
  }, [isOpen]);

  return (
    <>
      {/* Project Card */}
      <motion.div
        className="w-[300px] h-[250px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-all duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          console.log("Card clicked! Opening modal...");
          setIsOpen(true);
        }}
      >
        {/* Image */}
        <div className="relative w-full h-[120px] overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={280}
            height={120}
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full p-4 text-center">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <p className="mt-1 text-gray-400 text-sm">{description}</p>
        </div>
      </motion.div>

      {/* Modal Pop-Up */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-[#1A1A2E] p-6 rounded-lg shadow-lg w-[90%] md:w-[600px] relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => {
                console.log("Closing modal...");
                setIsOpen(false);
              }}
            >
              ✖
            </button>

            {/* Project Details */}
            <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
            <Image src={src} alt={title} width={500} height={250} className="rounded-md mb-4" />
            <p className="text-gray-300">{fullDetails}</p>

            {/* Close Button */}
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
