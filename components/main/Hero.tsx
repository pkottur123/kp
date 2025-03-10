import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-07N4CB85Y7"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-07N4CB85Y7');
      </script>
    </head>
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
