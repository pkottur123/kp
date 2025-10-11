import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string | string[];   // single or multiple images
  title: string;
  description: ReactNode;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;

  return (
    <div className="w-[300px] h-auto flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] p-4">
      {/* Image Section */}
      {multi ? (
        // SIDE-BY-SIDE (no carousel)
        <div className="grid grid-cols-2 gap-2 w-full h-[150px] rounded-t-lg overflow-hidden">
          {images.slice(0, 4).map((img, i) => (
            <div key={`${img}-${i}`} className="relative w-full h-full bg-black/20 rounded-md">
              <Image
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                fill
                style={{ objectFit: "contain" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full h-[150px] overflow-hidden rounded-t-lg">
          <Image
            src={images[0]}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      )}

      {/* Text Content Section */}
      <div className="w-full text-center mt-2">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
