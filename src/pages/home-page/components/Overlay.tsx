import React from "react";

const Overlay = () => {
  return (
    <div className="absolute w-full  flex flex-col justify-between z-40">
      <div
        className="absolute right-0 top-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#FAFCFD]
 to-transparent"
      ></div>
      {/* <div
        className="absolute right-0 bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#FAFCFD]
 to-transparent"
      ></div> */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-FAFCFD via-transparent to-FAFCFD"></div> */}
    </div>
  );
};

export default Overlay;
