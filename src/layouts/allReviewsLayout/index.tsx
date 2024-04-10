import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MobileSearchBar from "./components/MobileSearchBar";

const AllReviewsLayout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col px-[20px] md:px-[60px] lg:px-[100px]">
      <div className=" h-[195px]   fixed z-[80] top-0  left-0 right-0 max-w-[100vw]">
        <Header />
      </div>
      <main className="w-full mt-[265px] flex-grow ">
        <Outlet />
      </main>
    </div>
  );
};

export default AllReviewsLayout;
