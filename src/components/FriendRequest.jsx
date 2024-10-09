import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileImg from "./../../public/chattingbg.jpg";

const FriendRequest = () => {
  return (
    <div className="w-[33%] h-full px-2 py-2">
      <div className="w-full h-full bg-white rounded-md">
        <div className="">
          <div className="text-[20px] font-semibold px-2 pt-2 flex justify-between items-center">
            <h2>Friend Request</h2>
            <BsThreeDotsVertical />
          </div>

          <div className="flex justify-between items-center mt-5 px-1">
            <div className="flex gap-2 items-center">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={ProfileImg}
                alt=""
              />
              <div>
                <h2 className="text-[18px] font-semibold leading-[22px]">
                  Rajibul
                </h2>
                <p>Sept 24, 2024</p>
              </div>
            </div>
            <button className="text-[16px] font-medium px-3 py-2 bg-black text-white hover:bg-[#671E42] duration-[0.4s] rounded-[4px]">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendRequest