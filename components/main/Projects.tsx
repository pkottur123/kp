import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {[
          {
            src: "/reality.png",
            title: "Job Compatibility Checker",
            description: "AI-powered tool that analyzes job descriptions and provides match scores.",
            fullDetails:
              "This tool uses NLP and AI-driven techniques to compare resumes with job descriptions. It provides users with a compatibility score and highlights missing skills.",
          },
          {
            src: "/reality.png",
            title: "Query Genie",
            description: "Python-based chatbot using PandasAI, processing over 250,000+ entries.",
            fullDetails:
              "Query Genie is an AI chatbot built with PandasAI to automate repetitive queries in large datasets.",
          },
          {
            src: "/reality.png",
            title: "Voice Based ChatBot",
            description: "Designed a voice-based feedback analysis system with ChatGPT integration.",
            fullDetails:
              "This chatbot allows users to provide feedback via voice. Integrated with OpenAI's GPT model, it analyzes spoken input.",
          },
        ].map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            fullDetails={project.fullDetails} // ✅ Ensures all props are passed
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
