import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const ChatUser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "online" : "offline";
  };

  return (
    <>
      <div className="pt-5 pl-5 pb-3 h-[8vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div
          className={`avatar ${getOnlineUserStatus(selectedConversation._id)}`}
        >
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div>
          <h1 className="text-xl">{selectedConversation.name}</h1>
          <span className="text-sm">
            {getOnlineUserStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatUser;
