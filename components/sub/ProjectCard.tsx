import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string;
  title: string;
  description: ReactNode; // Allow JSX for hyperlink
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="w-[300px] h-auto flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] p-4">
      {/* Image Section */}
      <div className="relative w-full h-[120px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full text-center mt-2">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
