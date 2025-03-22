"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import {
  SiJavascript, SiTypescript, SiJava, SiPython, SiC, SiR, SiHtml5, SiCss3, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiGraphql,
  SiMysql, SiMongodb, SiAmazonaws, SiGooglecloud, SiFirebase,
  SiJupyter, SiOpenai, SiPytorch, SiTensorflow, SiApachespark, SiHadoop,
  SiDocker, SiKubernetes, SiJsonwebtokens, SiSap, SiFigma, SiTableau, SiMui
} from "react-icons/si";

// ICON MAP
const skillIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Java: <SiJava />,
  Python: <SiPython />,
  C: <SiC />,
  R: <SiR />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  "Go (Golang)": <SiGo />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  GraphQL: <SiGraphql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  "Amazon Web Services (AWS)": <SiAmazonaws />,
  "Google Cloud Platform (GCP)": <SiGooglecloud />,
  "Jupyter Notebook": <SiJupyter />,
  OpenAI: <SiOpenai />,
  PyTorch: <SiPytorch />,
  TensorFlow: <SiTensorflow />,
  Spark: <SiApachespark />,
  Hadoop: <SiHadoop />,
  Docker: <SiDocker />,
  Kubernetes: <SiKubernetes />,
  "REST API": <SiJsonwebtokens />,
  JSON: <SiJsonwebtokens />,
  SAP: <SiSap />,
  Figma: <SiFigma />,
  Tableau: <SiTableau />,
  "Material UI (MUI)": <SiMui />,
};

const categories = ["All", "Programming", "Cloud", "Data Science", "DevOps", "Other"];

const allSkillGroups = [
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
    skills: [
      "Docker", "Kubernetes",
    ],
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
      ? allSkillGroups
      : allSkillGroups.filter((group) => group.category === selectedCategory);

  return (
    <section
      id="additional-skills"
      className="flex flex-col items-center justify-center gap-12 px-6 py-20 mx-auto max-w-7xl"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8"
      >
        Additional Skills
      </motion.h2>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <AnimatePresence>
          {filteredGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`rounded-xl p-6 bg-gradient-to-br ${group.color} shadow-xl text-white`}
            >
              <h3 className="text-lg font-bold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-2 bg-black/20 hover:bg-white hover:text-black text-sm font-medium px-4 py-1.5 rounded-full transition duration-300"
                  >
                    {skillIcons[skill] && <span className="text-lg">{skillIcons[skill]}</span>}
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
