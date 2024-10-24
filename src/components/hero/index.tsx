"use client";
import React from "react";

const Hero = ({ page }: { page: string }) => {
  return (
    <div className="mt-24">
      <h2 className="text-[70px] font-bold text-[#252432] text-center max-w-[850px] leading-[1] mx-auto">
        Awesome UI Dark Template {page} Page
      </h2>
    </div>
  );
};

export default Hero;
