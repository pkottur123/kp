"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>

      {/* 2x2 grid – wide tiles */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard
          containerClassName="w-full"
          imageHeightClass="h-[300px]"  // taller image area
          src={["/CRM.jpeg", "/CRM2.jpeg"]}
          title="CRM Analytics Dashboard"
          description={<>Designed CRM dashboard integrating 100 companies and 500+ employer records; dynamic filtering improved.</>}
        />

        <ProjectCard
          containerClassName="w-full"
          imageHeightClass="h-[300px]"
          src="/Netflix_Dashboard.png"
          title="Netflix Content Analysis"
          description={<>Analyzes Netflix’s content distribution, ratings, genres, and regional availability to uncover streaming trends.</>}
        />

        <ProjectCard
          containerClassName="w-full"
          imageHeightClass="h-[300px]"
          src="/Samsung_dash.jpeg"
          title="Samsung 5G Market Analysis"
          description={<>Insights into sales, revenue, market share, and regional 5G.</>}
        />

        <ProjectCard
          containerClassName="w-full"
          imageHeightClass="h-[300px]"
          src="/Tesla_dashboard.jpeg"
          title="Tesla Sales Analysis"
          description={<>Insights into Tesla’s sales, revenue, and profitability across models and markets.</>}
        />
      </div>
    </div>
  );
};

export default Projects;
