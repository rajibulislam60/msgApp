
import React from "react";
import ProfileImg from "./../../public/chattingbg.jpg";
import SettingItem from "./SettingItem";
import { FaKey } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";

const AccountSetting = () => {
  return (
    <div className="w-[50%] h-full px-2 py-2">
      <div className="w-full h-full bg-white rounded-md">
        <div>
          <h2 className="text-[22px] font-semibold px-2 pt-2 ">
            Account Setting
          </h2>
          <div className="mt-8">
            <SettingItem Icon={FaKey} name="Change Password" />
            <SettingItem Icon={VscColorMode} name="Theme" />
            <SettingItem Icon={RiDeleteBin6Line} name="Delete Account" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSetting