import React, { useRef } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { useState } from "react";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { Background_Img } from "../utils/constants";

const bgDropImageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  backgroundImage:
    "linear-gradient(7deg, rgba(0, 0, 0, 0.8500) 10.00%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6000) 97.00%)",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "black",
  backgroundColor: "rgba(0, 0,0, 0.6)", // Semi-transparent background
  backdropFilter: "blur(3px)",
  // border: "3px solid black",
  boxShadow: 40,
  zIndex: 100,
  p: 4,
};
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate=useNavigate();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the user data
    // console.log(email.current.value);
    // console.log(password);
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message === null) {
      // signIn/signUp logic

      if (!isSignInForm) {
        //SignUp user
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
            console.log(user);

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        //SignIn user
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(user);

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  return (
    <div>
      <Header />
      {/* background image */}
      <div style={bgDropImageStyle} />
      <img
        className="absolute top-0 left-0 -z-10 bg-fixed h-screen w-screen blur-[2px]"
        src={Background_Img}
        alt="background-img"
      />

      {/* <LoginModal />    in future it will cause problem so lets create a new form*/}
      <form className="text-center" onSubmit={(e) => e.preventDefault()}>
        <div className="w- justify-center">
          <Box sx={style} className="shadow-2xl">
            <h1 className="text-white text-[40px] font-bold mx-[10px] ml-5 mb-[10px] text-left">
              {isSignInForm ? "Sign in" : "Sign Up"}
            </h1>
            <div>
              <div className="flex-col">
                {!isSignInForm && (
                  <div>
                    <p className="text-[22px] text-white font-semibold mt-3 text-center">
                      Enter your Name
                    </p>
                    <input
                      type="text"
                      className="my-4 mx-5 px-[78px] py-[11px] bg-white text-black font-bold border-b-white rounded-lg"
                      name="Name"
                      placeholder="Enter your name"
                      ref={name}
                    />
                  </div>
                )}
                <div>
                  <p className="text-[22px] text-white font-semibold mt-3 text-center">
                    Enter your Email Id
                  </p>
                  <input
                    type="text"
                    className="my-4 mx-5 px-[78px] py-[11px] bg-white text-black font-bold border-b-white rounded-lg"
                    name="email"
                    placeholder="Email or phone number"
                    ref={email}
                  />
                </div>

                <p className="text-[22px] text-white font-semibold mt-1 text-center">
                  Password
                </p>
                <input
                  className="my-4 mx-5 px-[78px] py-[11px] bg-white text-black font-bold border-white text-center rounded-lg"
                  type="password"
                  name="password"
                  placeholder="password"
                  ref={password}
                />
                <p className="text-ml text-red-600 text-left mx-[22px] font-bold">
                  {errorMessage}
                </p>
                <button
                  className="py-3 px-[150px]  mt-2 my-3 ml-7 text-white justify-center bg-red-700 rounded-lg"
                  onClick={handleButtonClick}
                >
                  {isSignInForm ? "Sign in" : "Sign Up"}
                </button>
                {/* <p className="text-red-600">{errorMessage}</p> */}
                <p className="underline text-white font-bold text-right cursor-pointer hover:text-xl">
                  Forgot Password
                </p>
                <p className="text-white text-center py-2">
                  {isSignInForm ? "New to Netflix?" : "Already Registered?"}
                  <p
                    className="font-bold underline py-2 cursor-pointer hover:text-xl"
                    onClick={toggleSignInForm}
                  >
                    {isSignInForm ? "Sign up now" : "Sign in now"}
                  </p>
                </p>
              </div>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default Login;
