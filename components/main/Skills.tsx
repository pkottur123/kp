"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React, { useState } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion, AnimatePresence } from "framer-motion";

// Categories
const categories = ["All", "Programming", "Cloud", "Data Science", "DevOps", "Other"];

// Skill Groups
const skillGroups = [
  {
    category: "Programming",
    title: "Programming Languages & Frameworks",
    color: "from-cyan-700 to-cyan-900",
    skills: [
      { name: "Java", description: "Object-oriented programming language." },
      { name: "SQL", description: "Structured Query Language for databases." },
      { name: "JavaScript", description: "Popular scripting language for the web." },
      { name: "TypeScript", description: "Typed superset of JavaScript." },
      { name: "Python", description: "General-purpose programming language." },
      { name: "C", description: "Low-level system programming language." },
      { name: "R", description: "Language for statistical computing." },
      { name: "HTML5", description: "Standard markup for web pages." },
      { name: "CSS3", description: "Styling language for HTML." },
      { name: "Go (Golang)", description: "Compiled, concurrent programming language." },
      { name: "Node.js", description: "JavaScript runtime for backend." },
      { name: "Express.js", description: "Minimal web framework for Node.js." },
      { name: "React.js", description: "UI library for building components." },
      { name: "Next.js", description: "React framework for production apps." },
      { name: "Tailwind CSS", description: "Utility-first CSS framework." },
      { name: "GraphQL", description: "Query language for APIs." },
    ],
  },
  {
    category: "Cloud",
    title: "Databases & Cloud Technologies",
    color: "from-green-700 to-green-900",
    skills: [
      { name: "MySQL", description: "Relational database system." },
      { name: "NoSQL", description: "Non-relational database systems." },
      { name: "MongoDB", description: "NoSQL document database." },
      { name: "Google Cloud Platform (GCP)", description: "Cloud services by Google." },
      { name: "Amazon Web Services (AWS)", description: "Cloud services by Amazon." },
      { name: "Firebase", description: "App development platform." },
    ],
  },
  {
    category: "Data Science",
    title: "Data Science & AI",
    color: "from-purple-700 to-purple-900",
    skills: [
      { name: "Jupyter Notebook", description: "Web-based interactive code environment." },
      { name: "OpenAI", description: "Artificial intelligence research lab." },
      { name: "PyTorch", description: "Deep learning framework." },
      { name: "TensorFlow", description: "Machine learning platform." },
      { name: "Spark", description: "Big data processing framework." },
      { name: "Hadoop", description: "Distributed storage and processing framework." },
    ],
  },
  {
    category: "DevOps",
    title: "DevOps & Tools",
    color: "from-yellow-700 to-yellow-900",
    skills: [
      { name: "Docker", description: "Containerization platform." },
      { name: "Kubernetes", description: "Container orchestration system." },
    ],
  },
  {
    category: "Other",
    title: "Other Tools & Technologies",
    color: "from-pink-700 to-pink-900",
    skills: [
      { name: "REST API", description: "API design architecture." },
      { name: "JSON", description: "Lightweight data-interchange format." },
      { name: "SAP", description: "Enterprise resource planning software." },
      { name: "Figma", description: "UI/UX design collaboration tool." },
      { name: "Tableau", description: "Business intelligence and visualization tool." },
      { name: "Material UI (MUI)", description: "React UI component library." },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGroups =
    selectedCategory === "All"
      ? skillGroups
      : skillGroups.filter((group) => group.category === selectedCategory);

  return (
    <>
      {/* Skill Logos Section */}
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden py-10"
        style={{ transform: "scale(0.9)" }}
      >
        <SkillText />
        {[Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill].map(
          (skillSet, setIndex) => (
            <div
              key={setIndex}
              className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
            >
              {skillSet.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          )
        )}
        {/* Background video */}
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section
        id="additional-skills"
        className="flex flex-col items-center justify-center gap-10 px-4 sm:px-6 py-20 mx-auto max-w-7xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 text-center"
        >
          Additional Skills
        </motion.h2>

        {/* Filter Bar */}
        <div className="relative flex flex-wrap gap-3 justify-center mb-6">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="relative px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="pill-highlight"
                  className="absolute inset-0 rounded-full bg-white z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-sm font-medium text-white">
                {cat}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Filtered Skill Cards */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {filteredGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.4 }}
                className={`rounded-xl p-5 sm:p-6 lg:p-8 mb-6 bg-gradient-to-br ${group.color} shadow-xl text-white backdrop-blur-md bg-opacity-30 border border-white/10`}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {group.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      className="relative group text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full transition duration-300 bg-white/10 text-white shadow-md hover:text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                    >
                      {skill.name}
                      {/* Tooltip */}
                      {skill.description && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs text-xs bg-black text-white px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                          {skill.description}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Skills;
