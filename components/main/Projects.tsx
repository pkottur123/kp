import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  // State for handling modal pop-ups
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };
  
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
          description="Master's in Business Analytics(2023 - 2024)"
        />
        <ProjectCard
          src="/sppu.jpg"
          title="Pune University"
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
          description="Gen AI Data Analyst          (January 2025-Present)"// ✅ New Line
        />
        <ProjectCard
          src="/open.jpg"
          title="OpenQQuantify"
          description="Business Analyst            (September 2024 - December 2024)"
        />
        <ProjectCard
          src="/tripai.jpg"
          title="TripAI"
          description="Business Analyst            (September 2024 - December 2024)"
        />
      </div>

       {/* Section 3: Projects */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
         src="/Netflix logo.png"
         title="Netflix Content Analysis"
          description={
            <>
              Analyzes Netflix's content distribution, ratings, genres, and regional availability to uncover streaming trends.{" "}
              <span className="text-blue-500 cursor-pointer underline" onClick={() => openModal("/Netflix_Dashboard.png")}>
                Dashboard
              </span>
            </>
          }
        />
        <ProjectCard
          src="/tesla logo.jpg"
          title="Tesla Sales Analysis"
          description={
            <>
              Provides insights into Tesla’s sales, revenue, and profitability across models, versions, and global markets.{" "}
              <span className="text-blue-500 cursor-pointer underline" onClick={() => openModal("/Tesla_dashboard.jpeg")}>
                Dashboard
              </span>
            </>
          }
        />
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button className="absolute top-2 right-2 text-black text-xl font-bold" onClick={closeModal}>
              ✖
            </button>
            <img src={selectedImage} alt="Dashboard" className="max-w-[90vw] max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
