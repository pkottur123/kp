// components/sub/ProjectCard.tsx
"use client";

import Image from "next/image";
import React from "react";

const GOLD = "#E4B860";

interface CardProps {
  src: string;
  title: string;
  description: string;
  href?: string;        // optional link to details/demo
  badge?: string;       // small badge (e.g., "Current", "2025")
  skills?: string[];    // chips under description
  size?: "sm" | "lg";   // controls tile height/image height
}

const SkillChips: React.FC<{ skills?: string[] }> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  const max = 6;
  const shown = skills.slice(0, max);
  const extra = skills.length - shown.length;

  return (
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      {shown.map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/90"
          style={{ borderColor: "#0b0d12", background: "#0b0d12" }}
        >
          {s}
        </span>
      ))}
      {extra > 0 && (
        <span
          className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/70"
          style={{ borderColor: "#0b0d12", background: "#0b0d12" }}
          aria-label={`and ${extra} more skills`}
        >
          +{extra}
        </span>
      )}
    </div>
  );
};

// Size presets
const CARD_SIZES = {
  sm: {
    cardHeight: "h-[320px]",
    imgHeight: "h-[120px] sm:h-[130px] lg:h-[140px]",
    imgPadding: "p-2",
  },
  lg: {
    cardHeight: "h-[420px]",
    imgHeight: "h-[220px] sm:h-[230px] lg:h-[240px]",
    imgPadding: "p-1",
  },
} as const;

const ProjectCard: React.FC<CardProps> = ({
  src,
  title,
  description,
  href,
  badge,
  skills,
  size = "sm",
}) => {
  const S = CARD_SIZES[size];

  const Body = (
    <div
      className={`group w-[300px] ${S.cardHeight} flex flex-col items-center rounded-2xl shadow-lg border`}
      style={{ borderColor: GOLD, background: "#11131A" }}
    >
      {/* Image */}
      <div className={`relative w-full ${S.imgHeight} overflow-hidden rounded-t-2xl`}>
        <Image
          src={src}
          alt={title}
          fill
          className={`object-contain ${S.imgPadding} transition-transform duration-300 group-hover:scale-[1.04] pointer-events-none`}
          sizes="(max-width: 768px) 300px, 300px"
        />
        {badge && (
          <span
            className="absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10px] tracking-wide"
            style={{ borderColor: GOLD, color: GOLD, background: "#0b0d12" }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="w-full p-4 text-center">
        <h3 className="text-base font-semibold text-white line-clamp-1">{title}</h3>
        <p className="mt-1 text-gray-400 text-xs leading-snug line-clamp-2">{description}</p>
        <SkillChips skills={skills} />
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in new tab)`}>
      {Body}
    </a>
  ) : (
    Body
  );
};

export default ProjectCard;
