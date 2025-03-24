"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Programming Languages & Frameworks",
    color: "from-cyan-700 to-cyan-900",
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
    color: "from-green-700 to-green-900",
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
    color: "from-purple-700 to-purple-900",
    skills: [
      { name: "Jupyter Notebook", level: "Intermediate" },
      { name: "OpenAI", level: "Intermediate" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "Spark", level: "Beginner" },
      { name: "Hadoop", level: "Beginner" },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-yellow-700 to-yellow-900",
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Beginner" },
    ],
  },
  {
    title: "Other Tools & Technologies",
    color: "from-rose-700 to-rose-900",
    skills: [
      { name: "REST API", level: "Advanced" },
      { name: "JSON", level: "Advanced" },
      { name: "SAP", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Material UI (MUI)", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  const [count, setCount] = useState(0);
  const totalSkills = skillGroups.reduce((acc, group) => acc + group.skills.length, 0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= totalSkills) clearInterval(interval);
      }, 20);
    }
  }, [isInView, totalSkills]);

  return (
    <section
      id="additional-skills"
      className="flex flex-col items-center justify-center gap-12 px-6 py-20 mx-auto max-w-7xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        Additional Skills
      </motion.h2>

      {/* Counter */}
      <motion.div
        ref={counterRef}
        className="text-white text-xl font-medium bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {count}+ Skills
      </motion.div>

      {/* Skill Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-xl p-6 bg-gradient-to-br ${group.color} shadow-xl text-white 
              backdrop-blur-md bg-white/10 border border-white/10`}
          >
            <h3 className="text-lg font-bold mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full transition duration-300 backdrop-blur-sm border border-white/10 flex items-center gap-2"
                >
                  <span>{skill.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      skill.level === "Advanced"
                        ? "bg-green-500 text-white"
                        : skill.level === "Intermediate"
                        ? "bg-yellow-400 text-black"
                        : "bg-red-400 text-white"
                    }`}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
