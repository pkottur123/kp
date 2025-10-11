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
      src: "/uta2.png",
      title: "Master&apos;s in Computer Science",
      description: "University of Texas at Arlington (Jan 2023 – Dec 2024)",
      skills: ["Database Systems", "AI/ML", "Data Mining", "Cloud & Big Data"],
    },
    {
      src: "/JNTUH.jpeg",
      title: "Bachelor&apos;s in Computer Science",
      description:
        "Jawaharlal Nehru Technological University Hyderabad (Aug 2016 – Sep 2020)",
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
      src: "/tom.jpg",
      title: "Business Intelligence Analyst",
      description: "Tomorrow&apos;s AI (Sep 2024 – Dec 2024)",
      skills: ["Power BI", "A/B Testing", "Python", "ETL", "KPI Design"],
    },
    {
      src: "/uta2.png",
      title: "Data Reporting Analyst",
      description: "University of Texas at Arlington (Aug 2023 – Dec 2024)",
      skills: ["SQL", "Excel", "Dashboards", "Stakeholder Reports", "Power BI"],
    },
    {
      src: "/infosys.png",
      title: "SAP Data & Systems Analyst",
      description: "Infosys (Mar 2021 – Nov 2022)",
      skills: ["SAP S/4HANA", "SAP Fiori", "CDS Views", "HP ALM", "ABAP"],
    },
  ];

  const projects = [
    {
      src: "/Palantir.jpeg",
      title: "CRM Analytics Dashboard",
      description:
        "Built a Palantir Foundry CRM dashboard: cleaned Companies/People, modeled objects, and shipped a filterable CRUD UI.",
      skills: ["Palantir Foundry", "SQL", "Python", "ETL", "Redshift"],
      href: "https://github.com/praneetha0909/CRM-Dashboard",
    },
    {
      src: "/Job_comp.jpeg",
      title: "Job Compatibility Checker",
      description:
        "Resume compatibility tool that analyzes JDs, scores matches, and suggests AI-driven improvements.",
      skills: ["React", "Next.js", "Python", "NLP", "OpenAI", "Tailwind"],
      href: "https://github.com/praneetha0909/job-compatibility-checker",
    },
    {
      src: "/dashboard.jpeg",
      title: "US Employment Trends",
      description:
        "Tableau dashboard analyzing 50+ state-level labor metrics; improved trend identification speed by 30%.",
      skills: ["Tableau", "SQL", "BigQuery", "Data Analysis"],
      href:
        "https://github.com/praneetha0909/U.S.-Employment-Unemployment-Trends-A-Tableau-Dashboard",
    },
    {
      src: "/SQL4.jpeg",
      title: "IMDb Genre & Talent Ratings Analytics (SQL)",
      description:
        "YoY genre averages and top lead actors per year from IMDb datasets using joins, aggregation, and filters.",
      skills: ["Advanced SQL", "Data Modeling", "Query Optimization"],
      href: "https://github.com/praneetha0909/IMDB-database",
    },
    {
      src: "/Port2.jpeg",
      title: "Query Genie",
      description:
        "Python chatbot (PandasAI) over 250k+ rows with ~95% precision on factual queries.",
      skills: ["Python", "Pandas", "PandasAI", "Evaluation"],
      href:
        "https://github.com/praneetha0909/Data-Mining/blob/main/Mukkamala_2894_Mulkalapally_8345_Munduru_6693_python.ipynb",
    },
    {
      src: "/Port3.jpeg",
      title: "Voice-Based Chatbot",
      description:
        "Voice feedback analysis with ChatGPT integration and streaming responses.",
      skills: ["Web Speech API", "Node/Flask", "LLM", "Streaming", "OpenAI API"],
      href: "https://github.com/praneetha0909/ConversAI-VoiceBot-Assistant",
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
