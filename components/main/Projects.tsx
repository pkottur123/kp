"use client";

import { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      src: "/Port1.jpeg",
      title: "Job Compatibility Checker",
      description: "AI-powered tool that analyzes job descriptions and provides match scores.",
      fullDetails:
        "This tool uses NLP and AI-driven techniques to compare resumes with job descriptions. It provides users with a compatibility score and highlights missing skills.",
    },
    {
      src: "/Port2.jpeg",
      title: "Query Genie",
      description: "Python-based chatbot using PandasAI, processing over 250,000+ entries.",
      fullDetails:
        "Query Genie is an AI chatbot built with PandasAI to automate repetitive queries in large datasets.",
    },
    {
      src: "/Port3.jpeg",
      title: "Voice Based ChatBot",
      description: "Designed a voice-based feedback analysis system with ChatGPT integration.",
      fullDetails:
        "This chatbot allows users to provide feedback via voice. Integrated with OpenAI's GPT model, it analyzes spoken input.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            onClick={() => {
              console.log(`✅ Opening Modal for: ${project.title}`);
              setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {/* ✅ Modal Pop-Up */}
      {selectedProject && (
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
                console.log("❌ Closing Modal...");
                setSelectedProject(null);
              }}
            >
              ✖
            </button>

            {/* Project Details */}
            <h2 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h2>
            <Image src={selectedProject.src} alt={selectedProject.title} width={500} height={250} className="rounded-md mb-4" />
            <p className="text-gray-300">{selectedProject.fullDetails}</p>

            {/* Close Button */}
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
