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
          onButtonClick={() => openModal("/netflix_dashboard.png")} // ✅ Click event now works!
        />
        <ProjectCard
          src="/tesla logo.jpg"
          title="Tesla Sales Analysis"
          description="Provides insights into Tesla’s sales, revenue, and profitability across models, versions, and global markets."
          onButtonClick={() => openModal("/tesla_dashboard.png")} // ✅ Click event now works!
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
