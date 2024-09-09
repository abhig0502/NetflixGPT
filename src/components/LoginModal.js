import { Backdrop, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./UserSlice";
import { Opacity } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "black",
  backgroundColor: "rgba(0, 0,0, 0.8)", // Semi-transparent background
  backdropFilter: "blur(3px)",
  // border: "3px solid black",
  boxShadow: 40,
  zIndex: 100,
  p: 4,
};

const LoginModal = ({ setShowLoginModal }) => {
  // console.log("welcome to modal");
  const handleOnClose = () => {
    setShowLoginModal(false);
  };

  // const handleHomePage=()=>{
  //   <Body />
  // }

  const [name, setName] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  // console.log(emailId);
  // console.log(signInPassword);

  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    // <div className="absolute flex-col w-4/12 bg-transparent">

    // </div>

    <div>
      <Modal open={true} onClose={handleOnClose}>
        <Box sx={style} className="shadow-2xl">
          {/* <button
            className=""
            
          >
            sign in
          </button> */}
          <h1 className="text-white text-[40px] font-bold mx-[10px] ml-5 mb-[10px]">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div>
              <h4 className="text-[22px] text-white font-semibold mt-11 text-center">
                Enter your Name
              </h4>
              <input
                type="text"
                className="my-4 mx-5 px-[75px] py-[11px] bg-white text-black font-bold border-b-white rounded-lg"
                name="name"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="flex-col">
            <h4 className="text-[22px] text-white font-semibold mt-3 text-center">
              username or mobile number
            </h4>

            <input
              type="text"
              className="my-4 mx-5 px-[78px] py-[11px] bg-white text-black font-bold border-b-white rounded-lg"
              name="email"
              placeholder="Email or phone number"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <h4 className="text-[22px] text-white font-semibold mt-1 text-center">
              Password
            </h4>
            <input
              className="my-4 mx-5 px-[78px] py-[11px] bg-white text-black font-bold border-white text-center rounded-lg"
              type="password"
              name="password"
              placeholder="password"
              value={signInPassword}
              onChange={(e) => {
                setSignInPassword(e.target.value);
              }}
            />
            <button
              className="py-3 px-[152px]  mt-2 my-3 ml-7 text-white justify-center bg-red-700 rounded-lg"
              onClick={() => {
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    name: name,
                    password: signInPassword,
                  })
                );
                dispatch(setUser(name));
                // handleHomePage()

                //set user state here
              }}
            >
              {isSignInForm ? "Sign in" : "Sign Up"}
            </button>
            <h3 className="underline text-white font-bold text-right cursor-pointer hover:text-xl">
              Forgot Password
            </h3>
            <h4 className="text-white text-center py-2">
              {isSignInForm ? "New to Netflix?" : "Already Registered?"}
              <h3
                className="font-bold underline py-2 cursor-pointer hover:text-xl"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign up now" : "Sign in now"}
              </h3>
            </h4>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
