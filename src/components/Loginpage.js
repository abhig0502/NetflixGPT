import { useState } from "react";
import LoginBody from "./Login_body";
import LoginHeader from "./Login_header";
import Body from "./Body";
import { backdropClasses } from "@mui/material";

const bgDropImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  backgroundImage:
    "linear-gradient(7deg, rgba(0, 0, 0, 0.8500) 10.00%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6000) 97.00%)",
};

const LoginPage = () => {
  // const user=JSON.parse(LocalStorage.getItem("user"));
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };
  return (
    <div className="overflow-hidden">
      <LoginHeader onLoginClick={handleLoginClick} />
      {/* (({user.email} && {user.password} ) && <Body />) */}
      <LoginBody
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <div style={bgDropImageStyle} />
      <img
        className="absolute top-0 left-0 -z-10 bg-fixed h-screen w-screen blur-[2px]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
        alt="background-img"
      />
    </div>
  );
};

export default LoginPage;
