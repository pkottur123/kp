"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  fullDetails: string; // Added full details for back side
}

const ProjectCard = ({ src, title, description, fullDetails }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-[300px] h-[250px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] flex flex-col items-center justify-center backface-hidden">
          <div className="relative w-[120px] h-[100px] overflow-hidden">
            <Image src={src} alt={title} width={120} height={100} />
          </div>
          <h1 className="text-lg font-semibold text-white mt-2">{title}</h1>
          <p className="mt-1 text-gray-400 text-sm">{description}</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-[#2A2A3E] rounded-lg shadow-lg border border-[#2A0E61] flex flex-col items-center justify-center text-white rotate-y-180 backface-hidden">
          <p className="p-4 text-center">{fullDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
