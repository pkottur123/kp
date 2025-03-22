"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{ transform: "scale(0.9)" }}
      >
        <SkillText />

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>

      <section
        id="additional-skills"
        className="flex flex-col items-center justify-center gap-10 px-10 py-20 mx-auto max-w-7xl"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Additional Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Java", "SQL", "JavaScript", "TypeScript", "Python", "C", "R", "HTML5", "CSS3", "Go (Golang)",
            "Node.js", "Express.js", "React.js", "Next.js", "Tailwind CSS", "GraphQL",
            "MySQL", "NoSQL", "MongoDB", "Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Firebase",
            "Jupyter Notebook", "OpenAI", "PyTorch", "TensorFlow", "Spark", "Hadoop",
            "Docker", "Kubernetes",
            "REST API", "JSON", "SAP", "Figma", "Tableau", "Material UI (MUI)"
          ].map((skill, index) => (
            <div
              key={index}
              className="text-white text-lg md:text-xl font-semibold px-4 py-2 rounded-xl shadow-md transition-all duration-300 bg-[#1e1e1e] hover:bg-white hover:text-black hover:shadow-white hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
