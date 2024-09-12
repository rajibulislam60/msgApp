import React, { useState } from "react";
import SignUpImage from "../assets/animeGirls.webp";
import Button from "../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  let [showPassword, setShowPassword] = useState(false);

  let handleVisiable = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="w-2/4 ml-[70px]">
        <h1 className="text-[34px] font-bold text-[#11175D] uppercase">
          Get started with easily register
        </h1>
        <p className="text-[22px] font-normal text-[#000000] mt-3">
          Free register and you can enjoy it
        </p>
        {/* -----------------------input area for signup------------------------- */}
        <div className="w-[368px] h-[80px] mt-[61px] relative">
          <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
            Email Address
          </label>
          <input
            className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
            type="mail"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="w-[368px] h-[80px] mt-[61px] relative">
          <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
            Full Name
          </label>
          <input
            className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
            type="name"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="w-[368px] h-[80px] mt-[61px] relative">
          <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
            Mobile Number
          </label>
          <input
            className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
            type="number"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="w-[368px] h-[80px] mt-[61px] relative">
          <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
            Password
          </label>
          <input
            className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />

          <div onClick={handleVisiable} className="cursor-pointer">
            {showPassword ? (
              <FaEye className="text-[24px] absolute top-[50%] translate-y-[-50%] right-[20px]" />
            ) : (
              <FaEyeSlash className="text-[24px] absolute top-[50%] translate-y-[-50%] right-[20px]" />
            )}
          </div>
        </div>
        {/* ----------------button area----------------------- */}
        <div className="w-[368px] h-[80px] mt-[61px] relative">
          <Button name="Sign Up" />
        </div>
        <p className="text-sm text-secondary text-center w-[368px] mt-[14px]">
          Already have an account ?{" "}
          <Link to="/login" className="text-[#EA6C00] font-bold">
            Login
          </Link>
        </p>
      </div>
      <div className="w-2/4 h-full">
        <img
          className="ml-auto w-full h-screen object-cover"
          src={SignUpImage}
          alt="Sign Up Image"
        />
      </div>
    </div>
  );
};

export default SignUp;
