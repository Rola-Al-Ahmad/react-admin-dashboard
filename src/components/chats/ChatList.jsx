import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItem";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default class ChatList extends Component {
    allChatUsers = [
        {
            image: "./assets/rolaa.jpeg",
            id: 1,
            name: "Rola Al-Ahmad",
            active: true,
            isOnline: true,
        },
        {
            image: "./assets/nour.jpeg",
            id: 2,
            name: "Nour El-Bazzal",
            active: false,
            isOnline: false,
        },
        {
            image: "./assets/jana.jpeg",
            id: 3,
            name: "Jana Younes",
            active: false,
            isOnline: false,
        },
        {
            image: "./assets/batoul.jpeg",
            id: 4,
            name: "Batoul Mtawea",
            active: false,
            isOnline: true,
        },
        {
            image: "./assets/profileImage.jpeg",
            id: 5,
            name: "Salwa Mohra",
            active: false,
            isOnline: false,
        },
        {
            image: "./assets/rolaa.jpeg",
            id: 6,
            name: "Ruba Al-Ahmad",
            active: false,
            isOnline: true,
        },
        {
            image: "./assets/rolaUser.jpeg",
            id: 7,
            name: "Ruba Ibrahim",
            active: false,
            isOnline: true,
        },
        {
            image: "./assets/batoul.jpeg",
            id: 8,
            name: "Aya Alheraki",
            active: false,
            isOnline: false,
        },
        {
            image: "./assets/nour.jpeg",
            id: 9,
            name: "Roaa Al-Ahmad",
            active: false,
            isOnline: true,
        },
        {
            image: "./assets/jana.jpeg",
            id: 10,
            name: "Janaaa",
            active: false,
            isOnline: true,
        },
    ];
    constructor(props) {
        super(props);
        this.state = {
            allChats: this.allChatUsers,
        };
    }
    render() {
        return (
            <div className="main__chatlist">
                <button className="btn">
                    <AddIcon/>
                    <span>New conversation</span>
                </button>
                <div className="chatlist__heading">
                    <h2>Chats</h2>
                    <MoreHorizIcon className="btn-nobg"/>
                </div>
                <div className="chatList__search">
                    <div className="search_wrap">
                        <input type="text" placeholder="Search Here" required />
                        <SearchIcon className="search-btn"/>
                    </div>
                </div>
                <div className="chatlist__items">
                    {this.state.allChats.map((item, index) => {
                        return (
                            <ChatListItems
                                name={item.name}
                                key={item.id}
                                animationDelay={index + 1}
                                active={item.active ? "active" : ""}
                                isOnline={item.isOnline ? "active" : ""}
                                image={item.image}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}