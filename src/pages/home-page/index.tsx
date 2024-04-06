import React from "react";
import HeroSection from "./components/HeroSection";
import NoScroll from "./components/NoScroll";

const HomePage = () => {
  return (
    <div className=" ">
      {/* <NoScroll active={true} /> */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
