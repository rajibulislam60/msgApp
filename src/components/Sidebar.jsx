import React from 'react'
import ProfileImg from "./../../public/chattingbg.jpg";
import { FaHome } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    let location = useLocation();

  return (
    <div className="w-[20%] h-screen px-6 py-6">
      <div className="w-full h-full bg-teal-500  flex flex-col">
        <div className="text-center">
          <div className="pt-5 flex justify-center">
            <img
              className="w-[150px] h-[150px] rounded-full"
              src={ProfileImg}
              alt=""
            />
          </div>
          <h2 className="text-[24px] font-bold leading-[26px] mt-2">
            Rajibul Islam
          </h2>
        </div>
        <div className="flex flex-col justify-around flex-grow">
          <div className="flex justify-center items-center">
            <Link to="/">
              <FaHome
                className={
                  location.pathname === "/"
                    ? "text-[60px] text-[#671E42]"
                    : "text-[60px]"
                }
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/message">
              <RiMessage2Fill
                className={
                  location.pathname === "/message"
                    ? "text-[60px] text-[#671E42]"
                    : "text-[60px]"
                }
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/notification">
              <IoMdNotifications
                className={
                  location.pathname === "/notification"
                    ? "text-[60px] text-[#671E42]"
                    : "text-[60px]"
                }
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/setting">
              <IoSettingsSharp
                className={
                  location.pathname === "/setting"
                    ? "text-[60px] text-[#671E42]"
                    : "text-[60px]"
                }
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to="leave">
              <ImExit
                className={
                  location.pathname === "/leave"
                    ? "text-[60px] text-[#671E42]"
                    : "text-[60px]"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar