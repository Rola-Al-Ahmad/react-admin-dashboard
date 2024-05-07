import React, { Component } from "react";

export default class ChatItem extends Component {
    render() {
        const { msg, image, isOnline, deliveryTime, seenTime, user } = this.props;
        return (
            <div
                style={{ animationDelay: `0.8s` }}
                className={`chat__item ${user ? user : ""}`}
            >
                <div className="chat__item__content">
                    <div className="chat__msg">{msg}</div>
                    <div className="chat__meta">
                        <span>{deliveryTime ? `${deliveryTime}` : 'Sending...'}</span>
                        <span>{seenTime ? `${seenTime}` : 'Not seen yet'}</span>
                    </div>
                </div>
                <div className="avatar">
                    <img src={image} alt="" />
                    <span className={`isOnline ${isOnline ? 'online' : 'offline'}`}></span>
                </div>
            </div>
        );
    }
}