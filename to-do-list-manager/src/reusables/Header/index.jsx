import React from "react";
import "./styles.css";
import { IMAGES } from "../../utils/constants";
const Header = () => {
  return (
    <div className="header flex justify-between align-middle p-4 bg-primary shadow-md sticky z-10">
      <div>
        <div className="header-title"> Taskify</div>
      </div>
      <div className="user-detail flex items-center gap-2 ">
        <div>
          <img
            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
            src={IMAGES.user}
            alt="User"
          />
        </div>

        <div className=" hidden sm:block text-white ">Welcome</div>
      </div>
    </div>
  );
};

export default Header;
