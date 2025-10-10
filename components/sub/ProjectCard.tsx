import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string | string[];
  title: string;
  description: ReactNode;
  skills?: string[];                 // <— NEW
  containerClassName?: string;
  imageHeightClass?: string;
}

const join = (...parts: Array<string | undefined>) =>
  parts.filter(Boolean).join(" ");

const ProjectCard = ({
  src,
  title,
  description,
  skills = [],                     // default empty
  containerClassName,
  imageHeightClass = "h-[300px]",
}: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;

  return (
    <div
      className={join(
        "w-full h-auto flex flex-col items-center bg-[#1A1A2E] rounded-xl shadow-lg border border-[#2A0E61] p-5",
        containerClassName
      )}
    >
      {/* Image Section */}
      {multi ? (
        <div className={join("grid grid-cols-2 gap-3 w-full rounded-lg overflow-hidden", imageHeightClass)}>
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
      <div className="w-full text-center mt-3">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-base leading-relaxed">{description}</p>

        {/* Skills (optional) */}
        {skills.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-medium text-slate-200 mb-2">Skills used</p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-xs rounded-full bg-[#0f172a] text-slate-200 border border-slate-700/60"
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
