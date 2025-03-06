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
          fullDetails="Completed a Master's degree in Business Analytics, focusing on data analysis, visualization, and machine learning applications in business."
        />
        <ProjectCard
          src="/sppu.jpg"
          title="Pune University"
          description="Bachelor's in Computer Science (2018 - 2022)"
          fullDetails="Earned a Bachelor's in Computer Science, with hands-on experience in programming, databases, and software development methodologies."
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
          fullDetails="At RealityAI, I work on developing AI-driven analytics solutions, implementing machine learning pipelines, and utilizing NLP for intelligent data processing."
        />
        <ProjectCard
          src="/open.jpg"
          title="OpenQQuantify"
          description="Business Analyst (September 2024 - December 2024)"
          fullDetails="Developed data-driven strategies, conducted predictive analytics, and improved business intelligence solutions for data-driven decision-making."
        />
        <ProjectCard
          src="/tripai.jpg"
          title="TripAI"
          description="Business Analyst (September 2024 - December 2024)"
          fullDetails="Contributed to AI-powered travel optimization models, customer data analytics, and automation of business processes for enhanced efficiency."
        />
      </div>
    </div>
  );
};

export default Projects;
