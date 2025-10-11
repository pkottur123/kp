// components/main/Projects.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

/* ---------- Animation helpers ---------- */
const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

/* ---------- Section title ---------- */
const SectionTitle: React.FC<{ children: React.ReactNode; size?: "lg" | "xl" }> = ({
  children,
  size = "xl",
}) => (
  <h2
    className={[
      "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500",
      size === "xl" ? "text-[60px]" : "text-[50px]",
      "py-10 text-center",
    ].join(" ")}
  >
    {children}
  </h2>
);

/* ---------- Thin white divider ---------- */
const Divider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-white/70 to-transparent ${className}`}
  />
);

/* ===================================================================== */

const Projects: React.FC = () => {
  /* ---- Your data (unchanged) ---- */
  const education = [
    {
      src: "/uta.png",
      title: "University of Texas at Arlington",
      description: "Master's in Business Analytics (2023 - 2024)",
      skills: ["Database Systems", "AI/ML", "Data Mining", "Cloud & Big Data"],
    },
    {
      src: "/sppu.jpg",
      title: "Savitribai Phule Pune University",
      description: "Bachelor's in Computer Science (2018 - 2022)",
      skills: ["Python", "Data Warehouse", "Web Data Mgmt", "Software Engg"],
    },
  ];

  const experience = [
    {
      src: "/reality.png",
      title: "RealityAI",
      description: "Gen AI Data Analyst (Jan 2025 - Present)",
      badge: "Current",
      skills: ["Python", "SQL", "Airflow", "AWS", "CI/CD", "Docker", "ETL", "Redshift"],
    },
    {
      src: "/open.jpg",
      title: "OpenQQuantify",
      description: "Business Analyst (Sep 2024 - Dec 2024)",
      skills: ["Power BI", "A/B Testing", "Python", "ETL", "KPI Design"],
    },
    {
      src: "/tripai.jpg",
      title: "TripAI",
      description: "Business Analyst (Sep 2024 - Dec 2024)",
      skills: ["SQL", "Excel", "Dashboards", "Stakeholder Reports", "Power BI"],
    },
  ];

  const projects = [
    {
      src: "/CRM.jpeg",
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
    <div id="projects" className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">

        {/* ==================== Education ==================== */}
        <Divider className="mt-2 mb-6" /> {/* <= white line ABOVE Education */}
        <SectionTitle>Education</SectionTitle>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center items-center gap-6 md:gap-12 flex-wrap"
        >
          {education.map((c, i) => (
            <motion.div variants={item} key={`edu-${i}`}>
              <ProjectCard {...c} size="sm" />
            </motion.div>
          ))}
        </motion.div>

        {/* ==================== Experience ==================== */}
        <Divider className="mt-14 mb-6" /> {/* remove if you only want it above Education */}
        <SectionTitle size="lg">Experience</SectionTitle>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center items-center gap-6 md:gap-12 flex-wrap"
        >
          {experience.map((c, i) => (
            <motion.div variants={item} key={`exp-${i}`}>
              <ProjectCard {...c} size="sm" />
            </motion.div>
          ))}
        </motion.div>

        {/* ==================== Projects ==================== */}
        <Divider className="mt-14 mb-6" /> {/* remove if not desired here */}
        <SectionTitle>Projects</SectionTitle>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center items-center gap-6 md:gap-12 flex-wrap"
        >
          {projects.map((p, i) => (
            <motion.div variants={item} key={`proj-${i}`}>
              <ProjectCard {...p} size="lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer divider (optional) */}
        <Divider className="mt-16" />
      </div>
    </div>
  );
};

export default Projects;
