import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Error from "./Error";

const Header = () => {
  
  

  return (
    <div className="flex justify-between">
      <div className="px-8 py-3 flex">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix-logo"
        />
      </div>
      <div className="flex justify-center items-center ">
        {/* other navItems movies tvshows etc */}

       
      </div>
    </div>
  );
};

export default Header;
