"use client"; // Ensure this runs on the client-side in Next.js

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Open PDF modal
  const openPdfModal = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
  };

  // Close PDF modal
  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      {/* Section: Education */}
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
          title="Pune University"
          description="Bachelor's in Computer Science (2018 - 2022)"
        />
      </div>

      {/* Section: Projects */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/Netflix logo.png"
          title="Netflix Content Analysis"
          description={
            <>
              Analyzes Netflix&apos;s content distribution, ratings, genres, and regional availability to uncover streaming trends.
              <br />
              <button
                onClick={() => openPdfModal("/Netflix_dash.pdf")}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Dashboard
              </button>
            </>
          }
        />
        <ProjectCard
          src="/tesla logo.jpg"
          title="Tesla Sales Analysis"
          description={
            <>
              Provides insights into Tesla&apos;s sales, revenue, and profitability across models, versions, and global markets.
              <br />
              <button
                onClick={() => openPdfModal("/Tesla_dash.pdf")}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Dashboard
              </button>
            </>
          }
        />
      </div>

      {/* Modal for PDF Viewer */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-[90vw] h-[80vh]">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={closePdfModal}
            >
              ✖
            </button>
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
