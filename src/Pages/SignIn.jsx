import React, { useState } from "react";
import SignInImage from "../assets/girlsAnime.jpg";
import GoogleImg from "../assets/googleImg.png";
import Button from "../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  let [showPassword, setShowPassword] = useState(false);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let handleVisiable = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Invalid Email");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-2/4 h-full">
          <img
            className="ml-auto w-full h-screen object-cover"
            src={SignInImage}
            alt="Sign In Image"
          />
        </div>
        <div className="w-2/4 ml-[70px]">
          <h1 className="text-[34px] font-bold text-[#11175D] uppercase">
            Login to your account!
          </h1>
          {/* -----------------google signin area--------------------- */}
          <div className="mt-[20px]">
            <img src={GoogleImg} alt=" google image for login" />
          </div>
          {/* ----------------------input area for login-------------------------- */}
          <div className="w-[368px] h-[80px] mt-[61px]">
            <label className="text-sm font-semibold text-secondary ">
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className=" w-full h-full border-b border-secondary/50 focus:outline-none focus:border-b-2"
              type="mail"
              placeholder="Enter Your Email"
              value={email}
            />
            {emailError && (
              <p className="text-red-500 text-sm font-normal">{emailError}</p>
            )}
          </div>

          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary">
              Password
            </label>
            <input
              onChange={handlePassword}
              className=" w-full h-full border-b border-secondary/50 focus:outline-none focus:border-b-2 relative"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
            />
            {passwordError && (
              <p className="text-red-500 text-sm font-normal">
                {passwordError}
              </p>
            )}

            <div onClick={handleVisiable} className="cursor-pointer">
              {showPassword ? (
                <FaEye className="text-[24px] absolute top-[70%] right-[20px]" />
              ) : (
                <FaEyeSlash className="text-[24px] absolute top-[70%] right-[20px]" />
              )}
            </div>
          </div>
          {/* ----------------button area----------------------- */}
          <div className="w-[368px] h-[80px] mt-[61px]">
            <Button onClick={handleSubmit} name="Login" />
          </div>
          <p className="text-sm text-secondary text-center w-[368px] mt-[14px]">
            Don't have an account ?{" "}
            <Link to="/signup" className="text-[#EA6C00] font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
