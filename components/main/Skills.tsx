"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages & Frameworks",
    color: "bg-gradient-to-br from-cyan-800 to-cyan-950",
    texture: "/public/grain..jpeg",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Intermediate" },
      { name: "R", level: "Beginner" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Go (Golang)", level: "Beginner" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
    ],
  },
  {
    title: "Databases & Cloud Technologies",
    color: "bg-gradient-to-br from-green-800 to-green-950",
    texture: "/public/grain..jpeg",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "NoSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Google Cloud Platform (GCP)", level: "Intermediate" },
      { name: "Amazon Web Services (AWS)", level: "Intermediate" },
      { name: "Firebase", level: "Beginner" },
    ],
  },
  {
    title: "Data Science & AI",
    color: "bg-gradient-to-br from-purple-800 to-purple-950",
    texture: "/public/grain..jpeg",
    skills: [
      { name: "Jupyter Notebook", level: "Intermediate" },
      { name: "OpenAI", level: "Intermediate" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "Spark", level: "Intermediate" },
      { name: "Hadoop", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "bg-gradient-to-br from-yellow-800 to-yellow-950",
    texture: "/public/grain..jpeg",
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Beginner" },
    ],
  },
  {
    title: "Other Tools & Technologies",
    color: "bg-gradient-to-br from-pink-800 to-pink-950",
    texture: "/public/grain..jpeg",
    skills: [
      { name: "REST API", level: "Intermediate" },
      { name: "JSON", level: "Intermediate" },
      { name: "SAP", level: "Beginner" },
      { name: "Figma", level: "Intermediate" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Material UI (MUI)", level: "Intermediate" },
    ],
  },
];

const levelColor = {
  Beginner: "bg-red-400",
  Intermediate: "bg-yellow-400",
  Advanced: "bg-green-400",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center px-6 py-20 gap-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8"
      >
        Additional Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-xl p-6 text-white shadow-lg backdrop-blur-md bg-opacity-60 relative overflow-hidden`}
            style={{
              backgroundImage: `url(${category.texture})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className={`${category.color} bg-opacity-60 rounded-xl p-4`}>
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm hover:scale-105 transition duration-300"
                  >
                    <span>{skill.name}</span>
                    <span
                      className={`text-xs font-semibold text-black px-2 py-0.5 rounded-full ${levelColor[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
