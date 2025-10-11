// components/main/Projects.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

// --- simple section animation
const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const Projects = () => {
  // You can keep these as plain JSX below; using arrays just keeps it tidy.
  const education = [
    {
      src: "/uta.png",
      title: "University of Texas at Arlington",
      description: "Master's in Business Analytics (2023 - 2024)",
    },
    {
      src: "/sppu.jpg",
      title: "Savitribai Phule Pune University",
      description: "Bachelor's in Computer Science (2018 - 2022)",
    },
  ];

  const experience = [
    {
      src: "/reality.png",
      title: "RealityAI",
      description: "Gen AI Data Analyst (Jan 2025 - Present)",
    },
    {
      src: "/open.jpg",
      title: "OpenQQuantify",
      description: "Business Analyst (Sep 2024 - Dec 2024)",
    },
    {
      src: "/tripai.jpg",
      title: "TripAI",
      description: "Business Analyst (Sep 2024 - Dec 2024)",
    },
  ];

  const projects = [
    {
      src: ["/CRM.jpeg", "/CRM2.jpeg"] as string[] | string,
      title: "CRM Analytics Dashboard",
      description:
        "Designed CRM dashboard integrating 100 companies and 500+ employer records; dynamic filtering improved.",
      skills: ["Power BI", "SQL", "DAX", "Data Modeling", "ETL"],
    },
    {
      src: "/Netflix_Dashboard.png",
      title: "Netflix Content Analysis",
      description:
        "Analyzes content distribution, ratings, genres, and regional availability to uncover streaming trends.",
      skills: ["Tableau", "Python", "Pandas", "EDA", "Storytelling"],
    },
    {
      src: "/Samsung_dash.jpeg",
      title: "Samsung 5G Market Analysis",
      description:
        "Insights into sales, revenue, market share, and regional 5G capabilities for strategic planning.",
      skills: ["Power BI", "SQL", "Excel", "Data Cleaning", "KPI Design"],
    },
    {
      src: "/Tesla_dashboard.jpeg",
      title: "Tesla Sales Analysis",
      description:
        "Breakdown of sales, revenue, and profitability across models, trims, and markets with executive KPIs.",
      skills: ["Tableau", "SQL", "Joins & Aggregations", "KPIs", "Filters"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-16" id="projects">
      {/* Education */}
      <h1 className="text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-6">
        Education
      </h1>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center"
      >
        {education.map((c, i) => (
          <motion.div variants={item} key={`edu-${i}`}>
            <ProjectCard
              src={c.src}
              title={c.title}
              description={c.description}
              imageHeightClass="h-[110px]"
              cardWidthClass="w-[240px]"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Experience */}
      <h1 className="text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-6">
        Experience
      </h1>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
      >
        {experience.map((c, i) => (
          <motion.div variants={item} key={`exp-${i}`}>
            <ProjectCard
              src={c.src}
              title={c.title}
              description={c.description}
              imageHeightClass="h-[110px]"
              cardWidthClass="w-[240px]"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Projects */}
      <h1 className="text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-6">
        Projects
      </h1>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
      >
        {projects.map((p, i) => (
          <motion.div variants={item} key={`proj-${i}`}>
            <ProjectCard
              src={p.src}
              title={p.title}
              description={p.description}
              imageHeightClass="h-[140px]"
              cardWidthClass="w-[260px]"
              skills={"skills" in p ? p.skills : []}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
