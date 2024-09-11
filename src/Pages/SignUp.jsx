import React from 'react';
import SignUpImage from '../assets/signUp.jpg'
import Button from '../components/Button';

const SignUp = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-2/4 ml-[70px]">
        <h1 className="text-[34px] font-bold text-[#11175D] uppercase">
          Get started with easily register
        </h1>
        <p className="text-[22px] font-normal text-[#000000] mt-3">
          Free register and you can enjoy it
        </p>
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
            type="mail"
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
            type="mail"
            placeholder="Enter Password"
          />

        {/* ----------------button area----------------------- */}
        <Button/>
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
}

export default SignUp