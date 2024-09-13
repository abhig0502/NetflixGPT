import React, { useRef } from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Browse = () => {
  const navigate = useNavigate();
  const search = useRef(null);
  const user = useSelector((Store) => Store.user);
  const {displayName}=user;
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div>
      <div className="flex  bg-gradient-to-b from-black to-white">
        <Header />
        <div className="my-2 flex justify-between">
          <ul className="flex ">
            <li className="p-3 m-3 text-white text-2xl cursor-pointer">Home</li>
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
              />
            </li>
            <li className="p-2 m-3 text-white text-2xl ">
              <button
                className="text-2xl  px-[18px] py-[5px] rounded-lg bg-red-600 hover:bg-red-400 hover:text-3xl"
                ref={search}
              >
                search
              </button>
            </li>
          </ul>

          <div className="ml-[250px] flex">
            <div className="m-auto flex">
            <p>{displayName}</p>
              <img
                className="w-[50px] h-[54px]"
                alt="login-logo"
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              />
              <div>
                <button
                  className="bg-red-600 text-white font-bold  py-3 px-4  text-[16px] rounded-lg hover:bg-red-400 hover:text-[18px] my-1 mx-3 "
                  onClick={handleSignOut}
                >
                  sign out {/* will create a toggle feature for the button*/}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      Browse
    </div>
  );
};

export default Browse;
