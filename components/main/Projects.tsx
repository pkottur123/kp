"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  // Function to open the Google Drive image link
  const openGoogleDriveLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/Netflix logo.png"
          title="Netflix Content Analysis"
          description="Analyzes Netflix's content distribution, ratings, genres, and regional availability to uncover streaming trends."
          onButtonClick={() => openGoogleDriveLink("https://drive.google.com/file/d/1PqXMVC4T9nmx4gunS-lHavF1yu49CAP0/view?usp=drive_link")}
        />
        <ProjectCard
          src="/tesla logo.jpg"
          title="Tesla Sales Analysis"
          description="Provides insights into Tesla’s sales, revenue, and profitability across models, versions, and global markets."
          onButtonClick={() => openGoogleDriveLink("https://drive.google.com/file/d/19sPSI5xCP3m8ZqWQtoYdmbd1iAHqe-A-/view?usp=drive_link")}
        />
      </div>
    </div>
  );
};

export default Projects;
