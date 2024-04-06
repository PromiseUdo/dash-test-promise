import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MobileSearchBar from "./components/MobileSearchBar";

const HomePageLayout = () => {
  return (
    <div className="min-h-screen relative flex flex-col px-[20px] md:px-[60px] lg:px-[100px]">
      <div className="bg-dash-shades-white  py-[8px]  fixed z-[80] top-0  left-0 right-0 max-w-[100vw] px-[20px] md:px-[60px] lg:px-[100px]">
        <Header />
        <MobileSearchBar />
      </div>
      <main className="flex-grow ">
        <Outlet />
      </main>
    </div>
  );
};

export default HomePageLayout;
