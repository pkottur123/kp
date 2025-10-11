"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      {/* Section 1: Education */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Education
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/uta.png"
          title="University of Texas at Arlington"
          description="Master's in Business Analytics (2023 - 2024)"
        />
        <ProjectCard
          src="/sppu.jpg"
          title="Savitribai Phule Pune University"
          description="Bachelor's in Computer Science (2018 - 2022)"
        />
      </div>

      {/* Section 2: Work Experience */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Experience
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/reality.png"
          title="RealityAI"
          description="Gen AI Data Analyst (January 2025 - Present)"
        />
        <ProjectCard
          src="/open.jpg"
          title="OpenQQuantify"
          description="Business Analyst (September 2024 - December 2024)"
        />
        <ProjectCard
          src="/tripai.jpg"
          title="TripAI"
          description="Business Analyst (September 2024 - December 2024)"
        />
      </div>

      {/* Section 3: Projects */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {/* CRM card with TWO images */}
        <ProjectCard
          src={["/crm-analytics-1.jpeg", "/crm-analytics-2.jpeg"]}
          title="CRM Analytics Dashboard"
          description={
            <>
              Designed CRM dashboard integrating 100 companies and 500+ employer
              records; dynamic filtering improved.
            </>
          }
        />

        <ProjectCard
          src="/Netflix_Dashboard.png"
          title="Netflix Content Analysis"
          description={
            <>
              Analyzes Netflix&apos;s content distribution, ratings, genres, and
              regional availability to uncover streaming trends.
            </>
          }
        />
        <ProjectCard
          src="/Samsung_dash.jpeg"
          title="Samsung 5G Market Analysis"
          description={
            <>
              This Samsung 5G Market Analysis dashboard provides insights into
              sales, revenue, market share, and regional 5G.
            </>
          }
        />
        <ProjectCard
          src="/Tesla_dashboard.jpeg"
          title="Tesla Sales Analysis"
          description={
            <>
              Provides insights into Tesla&apos;s sales, revenue, and
              profitability across models, versions, and global markets.
            </>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
