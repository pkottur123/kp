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
        className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden py-10"
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

      {/* Additional Skills Section */}
      <section
        id="additional-skills"
        className="flex flex-col items-center justify-center gap-10 px-6 py-16 mx-auto max-w-7xl"
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8">
          Additional Skills
        </h2>

        {/* Reusable Skill Group */}
        {[
          {
            title: "Programming Languages & Frameworks",
            color: "text-cyan-300",
            skills: [
              "Java", "SQL", "JavaScript", "TypeScript", "Python", "C", "R", "HTML5", "CSS3", "Go (Golang)",
              "Node.js", "Express.js", "React.js", "Next.js", "Tailwind CSS", "GraphQL",
            ],
          },
          {
            title: "Databases & Cloud Technologies",
            color: "text-green-300",
            skills: [
              "MySQL", "NoSQL", "MongoDB", "Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Firebase",
            ],
          },
          {
            title: "Data Science & AI",
            color: "text-purple-300",
            skills: [
              "Jupyter Notebook", "OpenAI", "PyTorch", "TensorFlow", "Spark", "Hadoop",
            ],
          },
          {
            title: "DevOps & Tools",
            color: "text-yellow-300",
            skills: [
              "Docker", "Kubernetes",
            ],
          },
          {
            title: "Other Tools & Technologies",
            color: "text-pink-300",
            skills: [
              "REST API", "JSON", "SAP", "Figma", "Tableau", "Material UI (MUI)",
            ],
          },
        ].map((group, idx) => (
          <div className="w-full" key={idx}>
            <h3 className={`text-xl font-bold ${group.color} mt-10 mb-4`}>
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-white text-sm md:text-base font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-white hover:to-white hover:text-black shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-white/40"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skills;
