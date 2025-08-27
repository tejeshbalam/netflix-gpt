import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_small.jpg"
          alt="background"
        />
      </div>
      <form className="absolute bg-black-80 d-flex my-32 w-3/12 mx-auto right-0 left-0 bg-black bg-opacity-80 p-12 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="enter Full  Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="enter e-mail address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="enter Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignUp} className="cursor-pointer">
          {isSignIn ? "New User? SignUp" : "Already User? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
