import React from "react";
import Explore from "./Explore";
import Reviews from "./Reviews";

const HeroSection = () => {
  return (
    <>
      <div className="h-full w-full relative overflow-hidden">
        <div className="flex items-center justify-between  w-full relative gap-[32px]">
          <Explore />
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
