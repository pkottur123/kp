import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for menu toggle




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#0374ff]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo1.jpeg"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />
          

          <span className="cursive text-[20px] hidden md:block text-gray-300">
            Prasanna Kottur
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#0374ff] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Career
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/prasannakottur/" target="_blank" rel="noopener noreferrer">
            <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://github.com/kotturp" target="_blank" rel="noopener noreferrer">
            <Image src="/gitwhite.png" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
            <Image src="/discord.svg" alt="Discord" width={24} height={24} />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[65px] left-0 w-full bg-[#030014e0] backdrop-blur-md text-white flex flex-col space-y-4 py-4 px-5 md:hidden`}
      >
        <a href="#about-me" className="cursor-pointer" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#skills" className="cursor-pointer" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#projects" className="cursor-pointer" onClick={() => setIsOpen(false)}>
          Career
        </a>




        
      </div>
    </div>
  );
};

export default Navbar;
