import React from "react";
import ProfileImg from "./../../public/chattingbg.jpg";
import SettingItem from "./SettingItem";
import { RiEdit2Fill } from "react-icons/ri";
import {
  MdInfoOutline,
  MdAddPhotoAlternate,
  MdHelpOutline,
} from "react-icons/md";


const ProfileSetting = () => {
  return (
    <div className="w-[50%] h-full px-2 py-2">
      <div className="w-full h-full bg-white rounded-md">
        <div>
          <h2 className="text-[22px] font-semibold px-2 pt-2 ">
            Profile Setting
          </h2>
          <div className=" px-5 mt-8 mb-8">
            <div className="flex gap-2 items-center">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={ProfileImg}
                alt=""
              />
              <div>
                <h2 className="text-[26px] font-bold leading-[30px]">
                  Rajibul Islam Rajib
                </h2>
                <p className="text-[18px] font-medium leading-[22px] mt-2">
                  Front-End Developer
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-black mt-8"></div>
          </div>
          <div>
            <SettingItem Icon={RiEdit2Fill} name="Edit Profile Name" />
            <SettingItem Icon={MdInfoOutline} name="Edit Profile Status Info" />
            <SettingItem Icon={MdAddPhotoAlternate} name="Edit Profile Photo" />
            <SettingItem Icon={MdHelpOutline} name="Help" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
