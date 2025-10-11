import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string | string[];
  title: string;
  description: ReactNode;
  skills?: string[];
  containerClassName?: string;
  imageHeightClass?: string;
  /** NEW: control card width */
  cardWidthClass?: string; // e.g. "w-[240px]"
}

const join = (...parts: Array<string | undefined>) =>
  parts.filter(Boolean).join(" ");

const ProjectCard = ({
  src,
  title,
  description,
  skills = [],
  containerClassName,
  imageHeightClass = "h-[140px]",     // smaller default
  cardWidthClass = "w-[240px]",       // << default compact width
}: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;

  return (
    <div
      className={join(
        `${cardWidthClass} h-auto flex flex-col items-center bg-[#1A1A2E] rounded-xl shadow-lg border border-[#2A0E61] p-4`,
        containerClassName
      )}
    >
      {/* Image Section */}
      {multi ? (
        <div className={join("grid grid-cols-2 gap-2 w-full rounded-lg overflow-hidden", imageHeightClass)}>
          {images.slice(0, 4).map((img, i) => (
            <div key={`${img}-${i}`} className="relative w-full h-full bg-black/20 rounded-md">
              <Image src={img} alt={`${title} screenshot ${i + 1}`} fill style={{ objectFit: "contain" }} priority={i===0}/>
            </div>
          ))}
        </div>
      ) : (
        <div className={join("relative w-full overflow-hidden rounded-lg", imageHeightClass)}>
          <Image src={images[0]} alt={title} fill style={{ objectFit: "contain" }} priority />
        </div>
      )}

      {/* Text */}
      <div className="w-full text-center mt-2">
        <h1 className="text-base font-semibold text-white leading-tight">{title}</h1>
        <p className="mt-1 text-gray-300 text-xs leading-snug">{description}</p>

        {skills.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-medium text-slate-200 mb-1">Skills used</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 text-[10px] rounded-full bg-[#0f172a] text-slate-200 border border-slate-700/60"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
