import Typography from "@/common/Typograhpy";
import InputWithAdornment from "@/common/inputs/InputWithAdornment";
import React from "react";
import iconComponents from "@/assets/icons/iconComponents";
import Button from "@/common/button";
const Explore = () => {
  return (
    <div className="hidden md:flex justify-start items-center h-auto">
      <div className=" flex flex-col w-[262px] md:w-[382px] lg:w-[502px]  h-auto items-start justify-start gap-[20px] lg:gap-[40px]  relative   ">
        <Typography
          as="h1"
          className="text-[40px] lg:text-[64px] font-bold leading-[57.45px] lg:leading-[77.45px] text-dash-shades-black"
        >
          Find a place you will love to live!
        </Typography>
        <Typography
          as="p"
          className="font-[400] text-[20px] lg:text-[24px] leading-[29.05px] text-dash-shades-black"
        >
          See through the lenses of people who have lived or visited the
          neighbourhood you might have in mind.
        </Typography>
        <InputWithAdornment
          id="searchInput"
          placeholder="Enter Address"
          left={<iconComponents.util.SearchIcon color="#1e1e1e" />}
          type="text"
          style={{
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        />
        <Button
          variant="primary"
          label="Search"
          className="font-[400] text-[16px]"
        />
      </div>
    </div>
  );
};

export default Explore;
