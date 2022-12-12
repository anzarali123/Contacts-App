import React, { useEffect, useState } from "react";
import MessageCard from "../../components/Message Card/messageCard.component";
import { NoMessageHeading } from "./messageList.styles";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch("api/message/");
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, []);
  return (
    <>
      {!messages.length ? (
        <NoMessageHeading>NO Messages</NoMessageHeading>
      ) : (
        messages.map((message) => {
          return <MessageCard key={message._id} message={message} />;
        })
      )}
    </>
  );
};

export default MessagesList;
