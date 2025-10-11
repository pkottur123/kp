import Image from "next/image";
import React, { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  src: string | string[];
  title: string;
  description: ReactNode;
  /** Optional sizing overrides */
  containerClassName?: string;       // width/padding overrides
  imageHeightClass?: string;         // e.g., "h-[260px]" or "h-[300px]"
}

const ProjectCard = ({
  src,
  title,
  description,
  containerClassName,
  imageHeightClass = "h-[260px]",    // bigger default
}: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;

  return (
    <div
      className={clsx(
        "w-full h-auto flex flex-col items-center bg-[#1A1A2E] rounded-xl shadow-lg border border-[#2A0E61] p-5",
        containerClassName
      )}
    >
      {/* Image Section */}
      {multi ? (
        <div className={clsx("grid grid-cols-2 gap-3 w-full rounded-lg overflow-hidden", imageHeightClass)}>
          {images.slice(0, 4).map((img, i) => (
            <div key={`${img}-${i}`} className="relative w-full h-full bg-black/20 rounded-md">
              <Image src={img} alt={`${title} screenshot ${i + 1}`} fill style={{ objectFit: "contain" }} priority={i===0}/>
            </div>
          ))}
        </div>
      ) : (
        <div className={clsx("relative w-full overflow-hidden rounded-lg", imageHeightClass)}>
          <Image src={images[0]} alt={title} fill style={{ objectFit: "contain" }} priority />
        </div>
      )}

      {/* Text */}
      <div className="w-full text-center mt-3">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
