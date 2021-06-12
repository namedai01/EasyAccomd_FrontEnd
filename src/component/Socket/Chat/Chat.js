import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Messages from "../Messages/Messages";
import Input from "../Input/Input";

import style from "./chat.module.css";

const ENDPOINT = "http://localhost:8080/";

let socket;

const Chat = ({ location }) => {
    console.log(location)
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);

        setName(name);

        socket.emit("join", { name, room }, (error) => {
            console.log(name)
            if (error) {
                alert(error);
            }
        });
    }, [location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            console.log(message);
            
            setMessages((messages) => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        console.log(message);

        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    return (
        <div className={style.outerContainer}>
            <div className={style.container}>
                <Messages messages={messages} name={name} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;
