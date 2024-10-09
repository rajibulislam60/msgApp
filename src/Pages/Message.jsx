import React from "react";
import FriendList from "../components/FriendList";

const Message = () => {
  return (
    <div className="w-full h-screen px-6 py-6">
      <div className="w-full h-full bg-slate-300 flex flex-col">
        <FriendList />
      </div>
    </div>
  );
};

export default Message;
