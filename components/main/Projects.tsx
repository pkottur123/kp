"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to open modal
  const openModal = (image: string) => {
    console.log("Opening Modal:", image); // ✅ Debugging Log
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    console.log("Closing Modal"); // ✅ Debugging Log
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      {/* Section: Projects */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/Netflix logo.png"
          title="Netflix Content Analysis"
          description="Analyzes Netflix's content distribution, ratings, genres, and regional availability to uncover streaming trends."
          onButtonClick={() => openModal("/Netflix_Nashboard.png")} // ✅ Click event now works!
        />
        <ProjectCard
          src="/tesla logo.jpg"
          title="Tesla Sales Analysis"
          description="Provides insights into Tesla’s sales, revenue, and profitability across models, versions, and global markets."
          onButtonClick={() => openModal("/Tesla_dashboard.jpeg")} // ✅ Click event now works!
        />
      </div>

      {/* ✅ Modal Popup - Now Opens on Click */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90vw] max-h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // ✅ Prevent accidental closure
            >
              <button className="absolute top-2 right-2 text-black text-xl font-bold" onClick={closeModal}>
                ✖
              </button>
              <Image
                src={selectedImage}
                alt="Dashboard"
                width={800}
                height={600}
                className="max-w-full max-h-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
🚀 Fully Fixed ProjectCard.tsx
tsx
Copy code
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string;
  title: string;
  description: ReactNode;
  onButtonClick?: () => void; // ✅ Button click function
}

const ProjectCard = ({ src, title, description, onButtonClick }: Props) => {
  return (
    <div className="w-[300px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] p-4 transition-transform hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="relative w-full h-[120px] flex justify-center items-center">
        <Image
          src={src}
          alt={title}
          width={250}
          height={120}
          className="rounded-t-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full text-center mt-3">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
        {/* Button (Only if `onButtonClick` is passed) */}
        {onButtonClick && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // ✅ Prevent event propagation issues
              console.log("Dashboard Button Clicked"); // ✅ Debugging Log
              onButtonClick();
            }}
            className="mt-3 px-4 py-2 text-white bg-gradient-to-r from-blue-700 to-cyan-500 rounded-md hover:scale-105 transition-transform duration-300"
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
