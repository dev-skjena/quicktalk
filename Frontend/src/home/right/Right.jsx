import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";

const Right = () => {
  return (
    <>
      <div className="w-[70%] bg-slate-950 text-white">
        <ChatUser></ChatUser>
        <div className="py-2 scrollbar-hidden overflow-y-auto" style={{maxHeight:"calc(92vh - 8vh)"}}>
          <Messages></Messages>
        </div>
        <Type></Type>
      </div>
    </>
  );
};

export default Right;
