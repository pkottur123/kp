"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16" id="projects">
      {/* Education */}
      <h1 className="text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-6">
        Education
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
        <ProjectCard
          src="/uta.png"
          title="University of Texas at Arlington"
          description={"Master's in Business Analytics (2023 - 2024)"}
          imageHeightClass="h-[110px]"
          cardWidthClass="w-[240px]"
          useGoldTheme
          skills={["Business Analytics", "Statistics", "SQL", "Data Viz"]}
          maxBadges={4}
        />
        <ProjectCard
          src="/sppu.jpg"
          title="Savitribai Phule Pune University"
          description={"Bachelor's in Computer Science (2018 - 2022)"}
          imageHeightClass="h-[110px]"
          cardWidthClass="w-[240px]"
          useGoldTheme
          skills={["CS Fundamentals", "OOP", "DBMS", "Algorithms"]}
          maxBadges={4}
        />
      </div>

      {/* Experience */}
      <h1 className="text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-6">
        Experience
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <ProjectCard
          src="/reality.png"
          title="Data Engineer"
          description={"Reality AI Lab (Jan 2025 – Present)"}
          imageHeightClass="h-[110px]"
          cardWidthClass="w-[260px]"
          useGoldTheme
          isCurrent
          skills={["Python", "SQL", "Airflow", "AWS", "CI/CD", "Docker", "Monitoring"]}
          maxBadges={6}
        />
        <ProjectCard
          src="/tomorrowsai.png"
          title="Business Intelligence Analyst"
          description={"Tomorrow's AI (Sep 2024 – Dec 2024)"}
          imageHeightClass="h-[110px]"
          cardWidthClass="w-[260px]"
          useGoldTheme
          skills={["Power BI", "A/B Testing", "Python", "ETL", "KPI Design"]}
          maxBadges={6}
        />
        <ProjectCard
          src="/uta.png"
          title="Data Reporting Analyst"
          description={"University of Texas at Arlington (Aug 2023 – Dec 2024)"}
          imageHeightClass="h-[110px]"
          cardWidthClass="w-[260px]"
          useGoldTheme
          skills={["SQL", "Excel", "Dashboards", "Stakeholder Reports", "Power BI"]}
          maxBadges={6}
        />
      </div>

      {/* Projects */}
      <h1 className="text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-6">
        Projects
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <ProjectCard
          src={["/CRM.jpeg", "/CRM2.jpeg"]}
          title="CRM Analytics Dashboard"
          description={
            "Designed CRM dashboard integrating 100 companies and 500+ employer records; dynamic filtering improved."
          }
          imageHeightClass="h-[140px]"
          cardWidthClass="w-[260px]"
          useGoldTheme
          skills={["Power BI", "SQL", "DAX", "Data Modeling", "ETL"]}
        />
        <ProjectCard
          src="/Netflix_Dashboard.png"
          title="Netflix Content Analysis"
          description={
            "Analyzes content distribution, ratings, genres, and regional availability to uncover streaming trends."
          }
          imageHeightClass="h-[140px]"
          cardWidthClass="w-[260px]"
          useGoldTheme
          skills={["Tableau", "Python", "Pandas", "EDA", "Storytelling"]}
        />
        <ProjectCard
          src="/Samsung_dash.jpeg"
          title="Samsung 5G Market Analysis"
          description={"Insights into sales, revenue, market share, and regional 5G capabilities for strategic planning."}
          imageHeightClass="h-[140px]"
          cardWidthClass="w-[260px]"
          useGoldTheme
          skills={["Power BI", "SQL", "Excel", "Data Cleaning", "KPI Design"]}
        />
        <ProjectCard
          src="/Tesla_dashboard.jpeg"
          title="Tesla Sales Analysis"
          description={"Breakdown of sales, revenue, and profitability across models, trims, and markets with executive KPIs."}
          imageHeightClass="h-[140px]"
          cardWidthClass="w-[260px]"
          useGoldTheme
          skills={["Tableau", "SQL", "Joins & Aggregations", "KPIs", "Filters"]}
        />
      </div>
    </div>
  );
};

export default Projects;
