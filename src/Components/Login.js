import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute w-3/12 p-10 bg-black bg-opacity-80 text-white my-[15%] mx-auto right-0 left-0 top-50">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-4 my-2 w-full bg-[#333] rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="px-2 py-4 my-2 w-full bg-[#333] rounded-md"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-4 my-2 w-full bg-[#333] rounded-md"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already registered? Login Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
