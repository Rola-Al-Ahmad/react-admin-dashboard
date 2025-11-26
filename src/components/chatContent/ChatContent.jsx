import React, { useState, createRef, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";

import "./chatContent.css";
import ChatItem from "./ChatItem";
import { Today } from "@mui/icons-material";

import rola from "../../assets/rolaa.jpeg";
import batoul from "../../assets/batoul.jpeg";

const ChatContent = () => {
  const messagesEndRef = createRef(null);

  const getChatItemsFromStorage = () => {
    const storedChatItems = sessionStorage.getItem("chatItems");
    if (storedChatItems) {
      return JSON.parse(storedChatItems);
    }
    // Default chat items
    return [
      {
        key: 1,
        image: batoul,
        type: "",
        msg: "Hi Rola, How are you?",
        deliveryTime: "11:00 AM",
        seenTime: "Seen 1.03PM",
      },
      {
        key: 2,
        image: rola,
        type: "other",
        msg: "I am fine.",
        deliveryTime: "11:00 AM",
        seenTime: "Seen 1.03PM",
      },
      {
        key: 3,
        image: rola,
        type: "other",
        msg: "What about you?",
        deliveryTime: "11:00 AM",
        seenTime: "Seen 1.03PM",
      },
      {
        key: 4,
        image: batoul,
        type: "",
        msg: "Awesome these days.",
        deliveryTime: "11:00 AM",
        seenTime: "Seen 1.03PM",
      },
      {
        key: 5,
        image: rola,
        type: "other",
        msg: "Finally. What's the plan?",
        deliveryTime: "11:00 AM",
        seenTime: "Seen 1.03PM",
      },
      {
        key: 6,
        image: batoul,
        type: "",
        msg: "what plan mate?",
        deliveryTime: "11:00 AM",
        seenTime: "Seen 1.03PM",
      },
      {
        key: 7,
        image: rola,
        type: "other",
        msg: "I'm talking about the tutorial.",
        deliveryTime: "11:00 AM",
        seenTime: "Seen 1.03PM",
      },
    ];
  };

  // Use useState to hold the chat items, initialized from sessionStorage
  const [chatItems, setChatItems] = useState(getChatItemsFromStorage());
  const [currentMessage, setCurrentMessage] = useState("");

  // Whenever the chat items change, save them to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("chatItems", JSON.stringify(chatItems));
  }, [chatItems]);

  // Function to add a new chat message
  const addChatItem = (newItem) => {
    if (currentMessage.trim() !== "") {
      const now = new Date();
      const newChatItem = {
        key: chatItems.length + 1,
        image: batoul,
        type: "",
        msg: currentMessage,
        deliveryTime: now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        }),
        seenTime: "Not Seen Yet",
      };
      setChatItems([...chatItems, newChatItem]);
      setCurrentMessage(""); // Reset the input field
    }
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <div className="avatar">
              <div className="avatarImg">
                <img src={rola} alt="Rola Al-Ahmad" />
              </div>
            </div>
            <p>Rola Al-Ahmad</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <SettingsIcon />
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chatItems.map((item, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={item.key}
                user={item.type ? item.type : "me"}
                msg={item.msg}
                image={item.image}
                deliveryTime={item.deliveryTime}
                seenTime={item.seenTime}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <AddIcon className="addFiles" id="addFiles" />
          <input
            type="text"
            placeholder="Type a message here"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <SendIcon
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={addChatItem}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
