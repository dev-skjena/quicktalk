import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import Type from "./Type.jsx";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import ChatUser from "./ChatUser.jsx";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-slate-800 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChat />
        ) : (
          <>
            <ChatUser />
            <div
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChat = () => {
  const [authUser] = useAuth();

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="font-semibold text-xl">
          Welcome <span>{authUser.user.name}</span>
          <br></br>Select a chat to start messaging.
        </h1>
      </div>
    </>
  );
};
