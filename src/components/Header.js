import React from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "./UserSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";


const Header = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(setUser({ uid: uid, email: email, displayName: displayName }));
        //if my user is logged in navigate it to the browse page
        navigate("/browse");
        
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        

        // ...
      }
    });
  }, []);
  

  return (
    <div className="flex justify-between">
      <div className="px-8 py-3 flex">
        <img
          className="w-44"
          src={LOGO}
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
