import InputWithAdornment from "@/common/inputs/InputWithAdornment";
import React from "react";
import iconComponents from "@/assets/icons/iconComponents";
const MobileSearchBar = () => {
  return (
    <div className="mt-2 w-full flex md:hidden">
      <InputWithAdornment
        id="searchInput"
        placeholder="Enter Address"
        left={<iconComponents.util.SearchIcon color="#1e1e1e" />}
        type="text"
        style={{
          paddingLeft: "12px",
          paddingRight: "12px",
          height: "30px",
        }}
      />{" "}
    </div>
  );
};

export default MobileSearchBar;
