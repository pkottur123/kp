import Image from "next/image";
import React, { ReactNode, useState } from "react";

interface Props {
  src: string | string[];        // now supports single or multiple images
  title: string;
  description: ReactNode;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="w-[300px] h-auto flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] p-4">
      {/* Image / Carousel */}
      <div className="relative w-full h-[150px] overflow-hidden rounded-t-lg">
        {images.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className={`absolute inset-0 transition-transform duration-500 ${
              i === index ? "translate-x-0" : i < index ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <Image
              src={img}
              alt={`${title} screenshot ${i + 1}`}
              fill
              style={{ objectFit: "contain" }}
              priority={i === index}
            />
          </div>
        ))}

        {hasMultiple && (
          <>
            {/* Controls */}
            <button
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 p-1"
            >
              ◀
            </button>
            <button
              aria-label="Next image"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 p-1"
            >
              ▶
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-4 rounded-full transition-all ${
                    i === index ? "bg-white/90" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Text Content */}
      <div className="w-full text-center mt-2">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
