import React, { useState } from "react";
import Typography from "../Typograhpy";
import Rating from "@mui/material/Rating";

const RateLocation = () => {
  const [value, setValue] = useState<number | null>(2);

  return (
    <div className="flex flex-col gap-[14px]">
      <Typography
        as="p"
        className="font-[400] text-[14px] text-dash-shades-black-2 leading-[16.94px]"
      >
        Rate location
      </Typography>
      <div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
};

export default RateLocation;
