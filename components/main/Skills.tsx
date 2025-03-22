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

const categories = ["All", "Programming", "Cloud", "Data Science", "DevOps", "Other"];

const skillGroups = [
  {
    category: "Programming",
    title: "Programming Languages & Frameworks",
    color: "from-cyan-700 to-cyan-900",
    skills: [
      "Java", "SQL", "JavaScript", "TypeScript", "Python", "C", "R", "HTML5", "CSS3", "Go (Golang)",
      "Node.js", "Express.js", "React.js", "Next.js", "Tailwind CSS", "GraphQL",
    ],
  },
  {
    category: "Cloud",
    title: "Databases & Cloud Technologies",
    color: "from-green-700 to-green-900",
    skills: [
      "MySQL", "NoSQL", "MongoDB", "Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Firebase",
    ],
  },
  {
    category: "Data Science",
    title: "Data Science & AI",
    color: "from-purple-700 to-purple-900",
    skills: [
      "Jupyter Notebook", "OpenAI", "PyTorch", "TensorFlow", "Spark", "Hadoop",
    ],
  },
  {
    category: "DevOps",
    title: "DevOps & Tools",
    color: "from-yellow-700 to-yellow-900",
    skills: ["Docker", "Kubernetes"],
  },
  {
    category: "Other",
    title: "Other Tools & Technologies",
    color: "from-pink-700 to-pink-900",
    skills: [
      "REST API", "JSON", "SAP", "Figma", "Tableau", "Material UI (MUI)",
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
      {/* Main Skill Icons Section */}
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

      {/* Additional Skills Section with Category Filter */}
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
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-white text-black shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Skill Cards */}
        <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <AnimatePresence>
            {filteredGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className={`rounded-xl p-5 sm:p-6 lg:p-8 bg-gradient-to-br ${group.color} shadow-xl text-white backdrop-blur-md bg-opacity-30 border border-white/10`}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {group.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full transition duration-300 bg-white/10 text-white shadow-md hover:text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                    >
                      {skill}
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
