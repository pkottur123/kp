"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ProjectCard = ({ src, title, description, onClick }: Props) => {
  return (
    <motion.div
      className="w-[300px] h-[250px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-[120px] overflow-hidden">
        <Image src={src} alt={title} width={280} height={120} objectFit="cover" className="rounded-t-lg" />
      </div>

      {/* Text Content */}
      <div className="w-full p-4 text-center">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
