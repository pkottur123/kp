"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";

// Skill Groups
const skillGroups = [
  {
    title: "Programming Languages & Frameworks",
    color: "from-cyan-700 to-cyan-900",
    skills: [
      "Java", "SQL", "JavaScript", "TypeScript", "Python", "C", "R", "HTML5", "CSS3", "Go (Golang)",
      "Node.js", "Express.js", "React.js", "Next.js", "Tailwind CSS", "GraphQL",
    ],
  },
  {
    title: "Databases & Cloud Technologies",
    color: "from-green-700 to-green-900",
    skills: [
      "MySQL", "NoSQL", "MongoDB", "Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Firebase",
    ],
  },
  {
    title: "Data Science & AI",
    color: "from-purple-700 to-purple-900",
    skills: [
      "Jupyter Notebook", "OpenAI", "PyTorch", "TensorFlow", "Spark", "Hadoop",
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-yellow-700 to-yellow-900",
    skills: [
      "Docker", "Kubernetes",
    ],
  },
];

const Skills = () => {
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

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 sm:p-8 bg-gradient-to-br ${group.color} text-white shadow-lg border border-white/10 relative overflow-hidden`}
            >
              {/* Sand/Grainy Overlay */}
              <div className="absolute inset-0 bg-[url('/grain..jpeg')] opacity-10 z-0 pointer-events-none mix-blend-soft-light"></div>

              <h3 className="text-xl font-bold mb-4 relative z-10">{group.title}</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
