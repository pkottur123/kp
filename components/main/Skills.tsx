"use client";

import { motion } from "framer-motion";
import React from "react";

const skillGroups = [
  {
    title: "Programming Languages & Frameworks",
    color: "from-cyan-700 to-cyan-900",
    skills: [
      "Java", "SQL", "JavaScript", "TypeScript", "Python", "C", "R",
      "HTML5", "CSS3", "Go (Golang)", "Node.js", "Express.js",
      "React.js", "Next.js", "Tailwind CSS", "GraphQL",
    ],
  },
  {
    title: "Databases & Cloud Technologies",
    color: "from-green-700 to-green-900",
    skills: [
      "MySQL", "NoSQL", "MongoDB", "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)", "Firebase",
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
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "Other Tools & Technologies",
    color: "from-rose-700 to-rose-900",
    skills: [
      "REST API", "JSON", "SAP", "Figma", "Tableau", "Material UI (MUI)",
    ],
  },
];

const Skills = () => {
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
                  className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full transition duration-300 backdrop-blur-sm border border-white/10"
                >
                  {skill}
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
