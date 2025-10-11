"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// ---- Design tokens
const GOLD = "#E4B860"; // keep as-is; change to blue if you want later

// ---- Reusable ProjectCard
interface CardProps {
  src: string | string[];       // ✅ allow array for side-by-side images
  title: string;
  description: string;
  href?: string;                // optional link to details/demo
  badge?: string;               // optional small badge (e.g., "2025", "In Progress")
  skills?: string[];            // chips under description
  github?: string;              // GitHub repo link (used by bottom button only)
  size?: "sm" | "lg";           // controls tile size
}

const SkillChips: React.FC<{ skills?: string[] }> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  const max = 6;
  const shown = skills.slice(0, max);
  const extra = skills.length - shown.length;

  return (
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      {shown.map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/90"
          style={{ borderColor: GOLD, background: "#0b0d12" }}
        >
          {s}
        </span>
      ))}
      {extra > 0 && (
        <span
          className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/70"
          style={{ borderColor: GOLD, background: "#0b0d12" }}
          aria-label={`and ${extra} more skills`}
        >
          +{extra}
        </span>
      )}
    </div>
  );
};

// Size presets
const CARD_SIZES = {
  sm: {
    cardHeight: "h-[320px]",
    imgHeight: "h-[120px] sm:h-[130px] lg:h-[140px]",
    imgPadding: "p-2",
  },
  lg: {
    cardHeight: "h-[420px]",
    imgHeight: "h-[220px] sm:h-[230px] lg:h-[240px]",
    imgPadding: "p-1",
  },
} as const;

// ---------- Inline Card ----------
const ProjectCard: React.FC<CardProps> = ({
  src,
  title,
  description,
  href,
  badge,
  skills,
  github,
  size = "sm",
}) => {
  const S = CARD_SIZES[size];
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;

  const CardBody = (
    <motion.div
      whileHover={{ y: -6, rotate: 0.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group w-[300px] ${S.cardHeight} flex flex-col items-center rounded-2xl shadow-lg border`}
      style={{ borderColor: GOLD, background: "#11131A" }}
    >
      {/* Image / Image grid */}
      <div className={`relative w-full ${S.imgHeight} overflow-hidden rounded-t-2xl bg-gradient-to-b from-black/10 to-black/0`}>
        {multi ? (
          <div className={`grid grid-cols-2 gap-2 w-full h-full ${S.imgPadding}`}>
            {images.slice(0, 4).map((img, i) => (
              <div key={`${img}-${i}`} className="relative w-full h-full rounded-md bg-black/20">
                <Image
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 300px, 300px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            src={images[0]}
            alt={title}
            fill
            className={`object-contain ${S.imgPadding} transition-transform duration-300 group-hover:scale-[1.04] pointer-events-none`}
            sizes="(max-width: 768px) 300px, 300px"
            priority={false}
          />
        )}

        {badge && (
          <span
            className="absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10px] tracking-wide"
            style={{ borderColor: GOLD, color: GOLD, background: "#0b0d12" }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="w-full p-4 text-center">
        <h3 className="text-base font-semibold text-white line-clamp-1">{title}</h3>
        <p className="mt-1 text-gray-400 text-xs leading-snug line-clamp-2">{description}</p>
        <SkillChips skills={skills} />
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in new tab)`}>
      {CardBody}
    </a>
  ) : (
    CardBody
  );
};

// ---- Page Section animation bits
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
      title: "University of Texas at Arlington",
      description: "Master's in Business Analytics (2023 - 2024)",
      skills: ["Database Systems", "AI/ML", "Data Mining", "Cloud Computing & Big Data "],
    },
    {
      src: "/sppu.jpg",
      title: "Savitribai Phule Pune University",
      description: "Bachelor's in Computer Science (2018 - 2022)",
      skills: ["Python", "Data Warehouse", "Web Data Management", "Software Engineering"],
    },
  ];

  const experience = [
    {
      src: "/reality.png",
      title: "Business Intelligence Analyst",
      description: "Reality AI Lab (Jan 2025 – Present)",
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
      src: ["/CRM.jpeg", "/CRM2.jpeg"] as string[] | string, // two images side-by-side
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

        {/* Projects — larger tiles */}
        <SectionTitle>Projects</SectionTitle>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center items-center gap-6 md:gap-12 flex-wrap"
        >
          {projects.map((p, i) => (
            <motion.div variants={item} key={`proj-${i}`} className="flex flex-col items-center">
              <ProjectCard {...p} size="lg" />

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => {
                    try {
                      e.stopPropagation();
                      window.open(p.github as string, "_blank", "noopener,noreferrer");
                    } catch {}
                  }}
