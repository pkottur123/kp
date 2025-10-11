"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  /** Single image OR multiple (shows side-by-side when >1) */
  src: string | string[];
  title: string;
  description: ReactNode;

  /** Optional chips */
  skills?: string[];

  /** Optional layout overrides used by your calls */
  imageHeightClass?: string;   // e.g. "h-[110px]"
  cardWidthClass?: string;     // e.g. "w-[240px]"
  containerClassName?: string; // extra classes if needed
}

const GOLD = "#E4B860";

const join = (...parts: Array<string | undefined>) =>
  parts.filter(Boolean).join(" ");

const ProjectCard = ({
  src,
  title,
  description,
  skills = [],
  imageHeightClass = "h-[140px]",
  cardWidthClass = "w-[260px]",
  containerClassName,
}: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;

  return (
    <div
      className={join(
        `${cardWidthClass} h-auto flex flex-col items-center rounded-2xl border p-4 shadow-lg`,
        containerClassName
      )}
      style={{ borderColor: GOLD, background: "#11131A" }}
    >
      {/* Image(s) */}
      {multi ? (
        <div className={join("grid grid-cols-2 gap-2 w-full overflow-hidden rounded-lg", imageHeightClass)}>
          {images.slice(0, 4).map((img, i) => (
            <div key={`${img}-${i}`} className="relative w-full h-full bg-black/25 rounded-md">
              <Image src={img} alt={`${title} screenshot ${i + 1}`} fill style={{ objectFit: "contain" }} />
            </div>
          ))}
        </div>
      ) : (
        <div className={join("relative w-full overflow-hidden rounded-lg bg-black/10", imageHeightClass)}>
          <Image src={images[0]} alt={title} fill style={{ objectFit: "contain" }} />
        </div>
      )}

      {/* Text */}
      <div className="w-full text-center mt-3">
        <h3 className="text-base font-semibold text-white leading-tight line-clamp-2">{title}</h3>
        <p className="mt-1 text-gray-300 text-xs leading-snug">{description}</p>

        {/* Skill chips */}
        {skills.length > 0 && (
          <div className="mt-2 flex flex-wrap justify-center gap-1.5">
            {skills.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-[10px] rounded-full border"
                style={{ borderColor: GOLD, background: "#0b0d12", color: "rgba(255,255,255,0.9)" }}
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
