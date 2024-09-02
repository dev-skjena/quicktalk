import React, { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      )}
      <div style={{ minHeight: "calc(92vh - 8vh)" }}>
        {!loading && messages.length === 0 && (
          <div>
            <p className="text-center mt-[20%] font-bold ">Say! Hi</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
