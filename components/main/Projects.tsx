"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>

      {/* 2x2 grid on md+, 1x4 on mobile */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard
          src={["/CRM.jpeg", "/CRM2.jpeg"]}
          title="CRM Analytics Dashboard"
          imageHeightClass="h-[300px]"
          description={<>Designed CRM dashboard integrating 100 companies and 500+ employer records; dynamic filtering improved.</>}
        />
        <ProjectCard
          src="/Netflix_Dashboard.png"
          title="Netflix Content Analysis"
          imageHeightClass="h-[300px]"
          description={<>Analyzes Netflix’s content distribution, ratings, genres, and regional availability to uncover streaming trends.</>}
        />
        <ProjectCard
          src="/Samsung_dash.jpeg"
          title="Samsung 5G Market Analysis"
          imageHeightClass="h-[300px]"
          description={<>Insights into sales, revenue, market share, and regional 5G.</>}
        />
        <ProjectCard
          src="/Tesla_dashboard.jpeg"
          title="Tesla Sales Analysis"
          imageHeightClass="h-[300px]"
          description={<>Insights into Tesla’s sales, revenue, and profitability across models and markets.</>}
        />
      </div>
    </div>
  );
};

export default Projects;
