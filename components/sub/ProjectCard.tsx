import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string;
  title: string;
  description: ReactNode;
  onButtonClick?: () => void; // ✅ Added event handler prop
}

const ProjectCard = ({ src, title, description, onButtonClick }: Props) => {
  return (
    <div className="w-[300px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] p-4 transition-transform hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="relative w-full h-[120px] flex justify-center items-center">
        <Image
          src={src}
          alt={title}
          width={250}
          height={120}
          className="rounded-t-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full text-center mt-3">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
        {/* Button (Only shows if `onButtonClick` is provided) */}
        {onButtonClick && (
          <button
            onClick={onButtonClick}
            className="mt-3 px-4 py-2 text-white bg-gradient-to-r from-blue-700 to-cyan-500 rounded-md hover:scale-105 transition-transform duration-300"
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
