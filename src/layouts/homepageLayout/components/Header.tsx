import Logo from "../../../common/logo";
import React from "react";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-full ">
      <Logo />
      <UserInfo />
    </div>
  );
};

export default Header;
