import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  /** Image(s). If you pass 2+, the card shows a 2-up grid. */
  src: string | string[];
  title: string;
  description: ReactNode;

  /** Optional: skill chips */
  skills?: string[];
  /** Max chips before showing +N */
  maxBadges?: number;

  /** Layout tweaks */
  containerClassName?: string;
  imageHeightClass?: string;
  cardWidthClass?: string;

  /** Styling tweaks */
  useGoldTheme?: boolean;   // gold border/ring like your screenshot
  isCurrent?: boolean;      // “Current” pill in the top-left
}

const join = (...parts: Array<string | undefined | false>) =>
  parts.filter(Boolean).join(" ");

const gold = {
  border: "border-amber-300/60",
  ring: "ring-amber-300/25",
  text: "text-amber-200",
  chip: "border-amber-300/60 text-amber-100 hover:bg-amber-300/10",
};

const slate = {
  border: "border-[#2A0E61]",
  ring: "ring-black/0",
  text: "text-slate-200",
  chip: "border-slate-700/60 text-slate-200 hover:bg-slate-700/10",
};

const ProjectCard = ({
  src,
  title,
  description,
  skills = [],
  maxBadges = 6,
  containerClassName,
  imageHeightClass = "h-[140px]",
  cardWidthClass = "w-[240px]",
  useGoldTheme = false,
  isCurrent = false,
}: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;
  const theme = useGoldTheme ? gold : slate;

  const shown = skills.slice(0, maxBadges);
  const overflow = Math.max(0, skills.length - shown.length);

  return (
    <div
      className={join(
        "relative",
        `${cardWidthClass} h-auto flex flex-col items-center bg-[#1A1A2E] rounded-2xl p-4`,
        "border ring-1 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_14px_30px_rgba(0,0,0,0.35)]",
        theme.border,
        theme.ring,
        containerClassName
      )}
    >
      {/* Current pill */}
      {isCurrent && (
        <div
          className={join(
            "absolute -top-3 left-4 text-[12px] px-3 py-1 rounded-full bg-black/50 border",
            theme.border,
            theme.text
          )}
        >
          Current
        </div>
      )}

      {/* Image Section */}
      {multi ? (
        <div className={join("grid grid-cols-2 gap-2 w-full rounded-lg overflow-hidden", imageHeightClass)}>
          {images.slice(0, 4).map((img, i) => (
            <div key={`${img}-${i}`} className="relative w-full h-full bg-black/20 rounded-md">
              <Image src={img} alt={`${title} screenshot ${i + 1}`} fill style={{ objectFit: "contain" }} />
            </div>
          ))}
        </div>
      ) : (
        <div className={join("relative w-full overflow-hidden rounded-lg", imageHeightClass)}>
          <Image src={images[0]} alt={title} fill style={{ objectFit: "contain" }} />
        </div>
      )}

      {/* Text */}
      <div className="w-full text-center mt-3">
        <h1 className="text-base md:text-lg font-semibold text-white leading-tight">{title}</h1>
        <p className="mt-1 text-gray-300 text-xs md:text-sm leading-snug">{description}</p>

        {skills.length > 0 && (
          <div className="mt-2">
            <p className={join("text-[11px] md:text-xs font-medium mb-1", theme.text)}>Skills used</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {shown.map((s) => (
                <span
                  key={s}
                  className={join(
                    "px-2 py-0.5 text-[10px] md:text-[11px] rounded-full border transition-colors",
                    "bg-[#0b0f19]",
                    theme.chip
                  )}
                >
                  {s}
                </span>
              ))}
              {overflow > 0 && (
                <span
                  className={join(
                    "px-2 py-0.5 text-[10px] md:text-[11px] rounded-full border",
                    "bg-[#0b0f19]",
                    theme.chip
                  )}
                >
                  +{overflow}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
