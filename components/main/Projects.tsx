"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

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

const Projects: React.FC = () => {
  const education = [
    {
      src: "/uta.png",
      title: "Master's in Business Analytics",
      description: "University of Texas at Arlington (Jan 2023 – Dec 2024)",
      skills: ["Data Mining", "Data Warehouse","Data Science","Python","Web Data Analytics", "Cloud & Big Data"],
    },
    {
      src: "/sppu.jpg",
      title: "Bachelor's in Computer Science",
      description:
        "Pune University (Aug 2018 – Sep 2022)",
      skills: ["Python", "Data Warehouse", "Web Data Mgmt", "Software Engg"],
    },
  ];

  const experience = [
    {
      src: "/reality.png",
      title: "Data Engineer",
      description: "Reality AI Lab (Jan 2025 – Present)",
      badge: "Current",
      skills: ["Python", "SQL", "Airflow", "AWS", "CI/CD", "Docker", "ETL", "Redshift"],
    },
    {
      src: "/open.jpg",
      title: "Business Intelligence Analyst",
      description: "OpenQQuantify AI (Sep 2024 – Dec 2024)",
      skills: ["Power BI", "A/B Testing", "Python", "ETL", "KPI Design"],
    },
    {
      src: "/tripai.jpg",
      title: "Business Intelligence Analyst",
      description: "TripAI Technologies (Aug 2023 – Dec 2024)",
      skills: ["SQL", "Excel", "Dashboards", "Stakeholder Reports", "Power BI","Chatboats"],
    },
  ];

  const projects = [
    {
      src: "/CRM.jpeg",
      title: "CRM Analytics Dashboard",
      description:
       " Designed CRM dashboard integrating 100 companies and 500+ employer records; dynamic filtering improved.",
      skills: ["Palantir Foundry", "SQL", "Python", "ETL", "Redshift"],
      
    },
    {
      src: "/Netflix_Dashboard.png",
      title: "Netflix Content Analysis",
      description:
        "Analyzes Netflix&apos;s content distribution, ratings, genres, and regional availability to uncover streaming trends.",
      skills: ["React", "Next.js", "Python", "NLP", "OpenAI", "Tailwind"],
      
    },
    {
      src: "/Samsung_dash.jpeg"",
      title: "Samsung 5G Market Analysis",
      description:
        "This Samsung 5G Market Analysis dashboard provides insights into sales, revenue, market share, and regional 5G.",
      skills: ["Tableau", "SQL", "BigQuery", "Data Analysis"],
     
    },
    {
      src: "/Tesla_dashboard.jpeg",
      title: "Tesla Sales Analysis",
      description:
        "Provides insights into Tesla&apos;s sales, revenue, and profitability across models, versions, and global markets.",
      skills: ["Tableau","Advanced SQL", "Data Modeling", "Query Optimization"],
     
    },
   
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">
        {/* Education */}
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

        {/* Experience */}
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

        {/* Projects */}
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

        <div
          className="mt-16 h-px w-2/3"
          style={{ background: "linear-gradient(90deg, transparent, #E4B860, transparent)" }}
        />
      </div>
    </div>
  );
};

export default Projects;
