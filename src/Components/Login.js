import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef("");

  const pageType = isSignInForm ? "signIn" : "signUp";

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(
      pageType,
      fullName.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    //SignIn / SignUp Logic
    if (!isSignInForm) {
      // SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
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
      <form
        className="absolute w-3/12 p-10 bg-black bg-opacity-80 text-white my-[15%] mx-auto right-0 left-0 top-50"
        onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="px-2 py-4 my-2 w-full bg-[#333] rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-2 py-4 my-2 w-full bg-[#333] rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-2 py-4 my-2 w-full bg-[#333] rounded-md"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <p>
              New to Netflix? <span className="underline">Sign up Now</span>
            </p>
          ) : (
            <p>
              Already registered? <span className="underline">Login Now</span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
