import React from "react";
import ProfileImg from "./../../public/chattingbg.jpg";
import { BsThreeDotsVertical, BsFillSendFill } from "react-icons/bs";

const MessageArea = () => {
  return (
    <div className="w-full h-full flex flex-col px-2 py-2">
      <div className="bg-white rounded-md shadow-lg flex flex-col h-full">
        {/* Header Section */}
        <div className="flex justify-between items-center py-4 px-2">
          <div className="flex gap-3 items-center">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={ProfileImg}
              alt="Profile"
            />
            <div>
              <h2 className="text-[18px] font-semibold leading-[22px]">
                Rajibul
              </h2>
              <p className="text-gray-500 text-sm">Sept 24, 2024</p>
            </div>
          </div>
          <div className="text-[24px] font-semibold px-2 pt-2">
            <BsThreeDotsVertical />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300"></div>

        {/* Message Area - Flex-grow to take up available space */}
        <div className="flex-grow px-4 py-4 bg-gray-100 overflow-y-auto">
          {/* Messages will go here */}
          <p className="text-center text-gray-500">No messages yet.</p>
        </div>

        {/* Input Section */}
        <div className="px-4 py-4 bg-white flex items-center gap-2 border-t">
          <input
            className="border border-gray-300 w-full text-[16px] px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Type your message"
          />
          <button className="text-blue-500 p-2 hover:bg-blue-100 rounded-full">
            <BsFillSendFill size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
