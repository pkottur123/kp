"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      {/* Education */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-8">
        Education
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
        <ProjectCard
          src="/uta2.png"
          title="University of Texas at Arlington"
          description={"Master's in Computer Science (January 2023 - December 2024)"}
        />
        <ProjectCard
          src="/vignan.png"
          title="Vignan Institute of Technology & Science"
          description={"Bachelor's in Computer Science (August 2016 - September 2020)"}
        />
      </div>

      {/* Experience */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-8">
        Experience
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <ProjectCard
          src="/reality.png"
          title="RealityAI"
          description={"Gen AI Data Analyst (January 2025 - Present)"}
        />
        <ProjectCard
          src="/open.jpg"
          title="OpenQQuantify"
          description={"Business Analyst (September 2024 - December 2024)"}
        />
        <ProjectCard
          src="/tripai.jpg"
          title="TripAI"
          description={"Business Analyst (September 2024 - December 2024)"}
        />
      </div>

      {/* Projects */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <ProjectCard
          src="/CRM.jpeg"
          title="CRM Analytics Dashboard"
          description={
            "Designed CRM dashboard integrating 100 companies and 500+ employer records; dynamic filtering improved."
          }
        />
        <ProjectCard
          src="/Netflix_Dashboard.png"
          title="Netflix Content Analysis"
          description={
            "Analyzes Netflix’s content distribution, ratings, genres, and regional availability to uncover streaming trends."
          }
        />
        <ProjectCard
          src="/Samsung_dash.jpeg"
          title="Samsung 5G Market Analysis"
          description={"Insights into sales, revenue, market share, and regional 5G."}
        />
        <ProjectCard
          src="/Tesla_dashboard.jpeg"
          title="Tesla Sales Analysis"
          description={
            "Insights into Tesla’s sales, revenue, and profitability across models and markets."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
