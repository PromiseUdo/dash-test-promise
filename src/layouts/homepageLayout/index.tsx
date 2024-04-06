import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

const HomePageLayout = () => {
  return (
    <div className="min-h-screen relative flex flex-col px-[20px] md:px-[60px] lg:px-[100px]">
      <div className="bg-dash-shades-white h-[50px] py-[24px]  fixed z-20 top-0  left-0 right-0 max-w-[100vw] px-[20px] md:px-[60px] lg:px-[100px]">
        <Header />
      </div>
      <main className="flex-grow ">
        <Outlet />
      </main>
    </div>
  );
};

export default HomePageLayout;
