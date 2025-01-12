import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chats/ChatList";
import ChatContent from "../chatContent/ChatContent";

const ChatBody = () => {
    return (
        <div className="main__chatbody">
            <ChatList />
            <ChatContent />
        </div>
    );
}

export default ChatBody