"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Function to open modal
  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      {/* Section 1: Education */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Education
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard src="/uta.png" title="University of Texas at Arlington" description="Master&apos;s in Business Analytics (2023 - 2024)" />
        <ProjectCard src="/sppu.jpg" title="Pune University" description="Bachelor&apos;s in Computer Science (2018 - 2022)" />
      </div>

      {/* Section 2: Work Experience */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Experience
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard src="/reality.png" title="RealityAI" description="Gen AI Data Analyst (January 2025 - Present)" />
        <ProjectCard src="/open.jpg" title="OpenQQuantify" description="Business Analyst (September 2024 - December 2024)" />
        <ProjectCard src="/tripai.jpg" title="TripAI" description="Business Analyst (September 2024 - December 2024)" />
      </div>

      {/* Section 3: Projects */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/Netflix logo.png"
          title="Netflix Content Analysis"
          description={
            <>
              Analyzes Netflix&apos;s content distribution, ratings, genres, and regional availability to uncover streaming trends.{" "}
              <motion.button
                onClick={() => openModal("/Netflix_Dashboard.png")}
                variants={slideInFromRight(0.5)}
                className="ml-2 text-white font-semibold bg-gradient-to-r from-blue-700 to-cyan-500 px-3 py-1 rounded-md hover:scale-105 transition-transform duration-300"
              >
                Dashboard
              </motion.button>
            </>
          }
        />
        <ProjectCard
          src="/tesla logo.jpg"
          title="Tesla Sales Analysis"
          description={
            <>
              Provides insights into Tesla&apos;s sales, revenue, and profitability across models, versions, and global markets.{" "}
              <motion.button
                onClick={() => openModal("/Tesla_dashboard.jpeg")}
                variants={slideInFromRight(0.5)}
                className="ml-2 text-white font-semibold bg-gradient-to-r from-blue-700 to-cyan-500 px-3 py-1 rounded-md hover:scale-105 transition-transform duration-300"
              >
                Dashboard
              </motion.button>
            </>
          }
        />
      </div>

      {/* Modal Popup */}
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
              ref={modalRef}
              className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90vw] max-h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                className="absolute top-2 right-2 text-black text-xl font-bold"
                onClick={closeModal}
              >
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
