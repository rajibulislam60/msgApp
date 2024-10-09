import React from "react";
import Search from "./Search";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileImg from "./../../public/chattingbg.jpg";

const Userlist = () => {
  return (
    <div className="w-[100%]  px-2 py-2">
      <div className="w-full bg-white rounded-md">
        <div className="w-full">
          <div className="px-2 pt-2 flex justify-between items-center text-[26px] font-semibold">
            <h2>User List</h2>
            <BsThreeDotsVertical />
          </div>
          <div className="w-full">
            <Search />
          </div>
          <div className="px-3 py-2">
            <div className="w-[250px] border rounded-md mt-4">
              <img className="w-full h-[200px] " src={ProfileImg} alt="" />
              <div className="px-2 mt-2 mb-2">
                <h2 className="text-[18px] font-semibold leading-[22px]">
                  Rajibul
                </h2>
                <button className="w-full text-[16px] font-medium px-3 py-2 bg-black text-white hover:bg-[#671E42] duration-[0.4s] rounded-[4px] mt-2">
                  Add
                </button>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center mt-5 px-1">
            <div className="flex gap-2 items-center">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={ProfileImg}
                alt=""
              />
              <div>
                <h2 className="text-[18px] font-semibold leading-[22px]">Rajibul</h2>
                <p>Sept 24, 2024</p>
              </div>
            </div>
            <button className="text-[16px] font-medium px-3 py-2 bg-black text-white hover:bg-[#671E42] duration-[0.4s] rounded-[4px]">
              Add
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Userlist;
