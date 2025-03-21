import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string;
  title: string;
  description: ReactNode; // Allow JSX for hyperlinks and buttons
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="w-[300px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] p-4 transition-transform hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="relative w-full h-[120px] flex justify-center items-center">
        <Image
          src={src}
          alt={title}
          width={250} // Fixed width for proper rendering
          height={120} // Fixed height
          className="rounded-t-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full text-center mt-3">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
