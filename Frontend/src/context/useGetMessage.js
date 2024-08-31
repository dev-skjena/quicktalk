import React, { useEffect, useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessages(res.data);
          setLoading(false);
        } catch (err) {
          console.log("Error in getMessages : " + err);
        }
      }
    };
    getMessages();
  }, [selectedConversation, setMessages]);

  return { messages, loading };
};

export default useGetMessage;
