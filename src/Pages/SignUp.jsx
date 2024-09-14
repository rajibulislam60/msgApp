import React, { useState } from "react";
import SignUpImage from "../assets/animeGirls.webp";
import Button from "../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  let [showPassword, setShowPassword] = useState(false);

  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState("");
  let [nameError, setNameError] = useState("");
  let [phoneError, setPhoneError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let handleVisiable = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  let handlePhone = (e) => {
    setPhone(e.target.value);
    setPhoneError("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailError("Email is required");
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setEmailError("Invalid Email");
    }
    if (!name) {
      setNameError("Email is required");
    }
    if (!phone) {
      setPhoneError("Email is required");
    }
    if (!password) {
      setPasswordError("Email is required");
    }
  };

  return (
    <div className=" w-full h-screen flex justify-between">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[70px]">
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
              onChange={handleEmail}
              className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
              type="mail"
              placeholder="Enter Your Email"
              value={email}
            />
            {emailError && (
              <p className="text-red-500 text-sm font-normal">{emailError}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
              Full Name
            </label>
            <input
              onChange={handleName}
              className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
              type="name"
              placeholder="Enter Your Full Name"
              value={name}
            />
            {nameError && (
              <p className="text-red-500 text-sm font-normal">{nameError}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
              Mobile Number
            </label>
            <input
              onChange={handlePhone}
              className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
              type="number"
              placeholder="Enter Mobile Number"
              value={phone}
            />
            {phoneError && (
              <p className="text-red-500 text-sm font-normal">{phoneError}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
              Password
            </label>
            <input
              onChange={handlePassword}
              className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
            />
            {passwordError && (
              <p className="text-red-500 text-sm font-normal">{passwordError}</p>
            )}

            <div onClick={handleVisiable} className="cursor-pointer">
              {showPassword ? (
                <FaEye className="text-[24px] absolute top-[50%] translate-y-[-50%] right-[20px]" />
              ) : (
                <FaEyeSlash className="text-[24px] absolute top-[50%] translate-y-[-50%] right-[20px]" />
              )}
            </div>
          </div>
          {/* ----------------button area----------------------- */}
          <div className="w-[368px] h-[80px] mt-[61px] cursor-pointer relative">
            <Button onClick={handleSubmit} name="Sign Up" />
          </div>
          <p className="text-sm text-secondary text-center w-[368px] mt-[14px]">
            Already have an account ?{" "}
            <Link to="/login" className="text-[#EA6C00] font-bold">
              Login
            </Link>
          </p>
        </div>
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
