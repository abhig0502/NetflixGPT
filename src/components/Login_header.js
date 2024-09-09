import React from "react";
import LoginModal from "./LoginModal";
import { useState } from "react";
import { getUserFromLocalStorage } from "../utils/userUtils";
import { useDispatch } from "react-redux";
import { removeUser } from "./UserSlice";
import { useSelector } from "react-redux";

const LoginHeader = ({ onLoginClick }) => {
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log({ userName });
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const handleSignInButtonClick = () => {
    onLoginClick();
  };

  const handleSignOutButtonClick = () => {
    localStorage.removeItem("user");
    dispatch(removeUser());
  };
  const userName = useSelector((store) => store.user.name);  
  // console.log({userName});

  return (
    <div className="flex justify-between">
      <div className="px-8 py-3 flex">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix-logo"
        />
        {userName && (
          <div className="">
            <ul className="flex">
              <li className="p-3 m-3 text-white text-2xl cursor-pointer">
                Home
              </li>
              <li className="p-3 m-3 text-white text-2xl cursor-pointer">
                Movies
              </li>
              <li className="p-3 m-3 text-white text-2xl cursor-pointer">
                TV Shows
              </li>
              <li className="p-2 m-3 text-white text-2xl cursor-pointer">
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className="w-[290px] rounded-lg text-lg p-2 text-black"
                  value={searchItem}
                  onChange={(e) => {
                    setSearchItem(e.target.value);
                  }}
                />
              </li>
              <li className="p-2 m-3 text-white text-2xl ">
                <button className="text-2xl  px-[18px] py-[5px] rounded-lg bg-red-600 hover:bg-red-400 hover:text-3xl">
                  search
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center ">
        {/* other navItems movies tvshows etc */}
        {userName ? (
          <div className="flex">
            <div className="text-white text-2xl mt-2 ml-4">{userName}</div>
            <div className="bg-red-700 rounded-xl mx-[40px]  ">
              <button
                className="bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-400 hover:text-xl"
                onClick={handleSignOutButtonClick}
              >
                signout {/* will create a toggle feature for the button*/}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-red-700 rounded-xl mx-[40px]  ">
            <button
              className="bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-400 hover:text-xl"
              onClick={handleSignInButtonClick}
            >
              sign in {/* will create a toggle feature for the button*/}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginHeader;
