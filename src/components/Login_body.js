import LoginModal from "./LoginModal";

const LoginBody = ({ showLoginModal ,setShowLoginModal}) => {
  return (
    <>
      <div className=" flex justify-center items-center  ">
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal}/>}
        <h1 className="w-[1000px] text-[80px] font-bold text-white text-center mt-[200px] justify-items-center">
          Unlimited movies,TV shows and more
        </h1>
      </div>
    </>
  );
};

export default LoginBody;
