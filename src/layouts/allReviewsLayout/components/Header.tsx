import InputWithAdornment from "@/common/inputs/InputWithAdornment";
import Logo from "@/common/logo";
import UserInfo from "@/layouts/components/UserInfo";
import React from "react";
import iconComponents from "@/assets/icons/iconComponents";
import Typography from "@/common/Typograhpy";
import Button from "@/common/button";
import Slider from "react-slick";

const places = [
  "Schools",
  "Hospitals",
  "Resort Park",
  "Shopping Malls",
  "Airport",
  "Train Station",
  "Nightlife",
  "Public Wifi",
  "Parking Lot",
  "Security",
  "Public Transport",
  "Bus Station",
  "Quiet",
  "Market",
  "Church",
  "Mosque",
];

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  //   nextArrow: <IoIosArrowDroprightCircle />,
  //   prevArrow: <IoIosArrowDropleftCircle />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 13,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Header = () => {
  return (
    <div className="px-[100px] py-[16px] h-full flex flex-col gap-[14px] w-full bg-dash-shades-blue-4 ">
      <div className="flex items-center justify-between ">
        <Logo />
        <InputWithAdornment
          id="searchInput"
          placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
          left={<iconComponents.util.SearchIcon color="#1e1e1e" />}
          right={<iconComponents.util.CancelIcon color="#1e1e1e" />}
          type="text"
          style={{
            paddingLeft: "12px",
            paddingRight: "12px",
            width: "778px",
            background: "#fff",
          }}
          className="bg-[#ffffff] text-[14px]"
        />
        <UserInfo />
      </div>
      <div className="flex items-center justify-between">
        {/* left */}
        <div>
          <div>
            <Typography
              as="h3"
              className="text-dash-shades-black-2 font-[500] text-[24px] leading-[29.05px]"
            >
              Bonny and Clyde Street, Ajao Estate, Lagos
            </Typography>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Typography
                as="span"
                className="font-semibold text-[16px] leading-[24px]"
              >
                "450"
              </Typography>
              <Typography
                as="span"
                className="font-[400] text-[16px] leading-[24px]"
              >
                Reviews (People are raving about the selected location)
              </Typography>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-[16px]">
          <Button
            className="uppercase rounded-[6px] text-[16px] font-[500] leading-[19.36px]"
            label="Leave a review"
            variant="primary"
          />

          <Button
            label={<iconComponents.util.BookmarkIcon />}
            variant="outlined"
            className="w-[56px] px-0 border-[1.5px]"
          />
          <Button
            label={<iconComponents.util.ShareIcon />}
            variant="outlined"
            className="w-[56px] px-0 border-[1.5px]"
          />
        </div>
      </div>

      <div className="relative gap-[8px]">
        <Slider {...settings}>
          {places.map((place, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-[24px] rounded-[4px] border-[0.2px]  text-dash-shades-black-2  px-[8px] py-[4px] mr-2"
            >
              <Typography
                as="p"
                className="flex items-center justify-center text-center text-[14px] font-[400] text-dash-shades-black-2 leading-[16.1px]"
              >
                {place}
              </Typography>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
