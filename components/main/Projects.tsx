import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Education
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/uta.png"
          title="University of Texas at Arlington"
          description="Master's in Business Analyst (2023 - 2024)"
        />
        <ProjectCard
          src="/sppu.jpg"
          title="Pune University"
          description="Bachelor's in Computer Science (2016 - 2020)"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/reality.png"
          title="RealityAI"
          description="Gen AI Data Analyst\n(January 2025-Present)"
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
    </div>
  );
};

export default Projects;
