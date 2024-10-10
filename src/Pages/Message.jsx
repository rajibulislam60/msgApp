import React from "react";
import FriendList from "../components/FriendList";
import MessageArea from "../components/MessageArea";

const Message = () => {
  return (
    <div className="w-full h-screen px-6 py-6">
      <div className="w-full h-full bg-slate-300 flex flex-col">
        <div className="flex gap-3 h-full">
          <FriendList />
        <MessageArea/>
        </div>
        
      </div>
    </div>
  );
};

export default Message;
