import { useState, useEffect } from "react";
import { Message } from "./Message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import "./styles/MessageList.css"

export const MessageList = () => {

    const [messages, setMessages] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState("");

    const sendMessage = () => {
        if(textAreaValue) {
            setMessages((messages) => [...messages, { textAreaValue, author: "User" }]);
            setTextAreaValue("")
        }
    }

    const handlePressInput = ({ code }) => {
        if (code === "Enter" && textAreaValue) {
            sendMessage();
        }
      };

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        let timerId = null;

        if (lastMessage?.author === "User") {

            timerId = setTimeout(() => {
              setMessages((messages) => [...messages, { textAreaValue: "Hello, " + lastMessage?.author, author: "Bot" }]);
            }, 500);  
          }

          return () => {
            clearTimeout(timerId);
          };

    }, [messages])

    return (
        <>
            <div>
            {messages.map((message, id) => (
                <Message key={message.value} message={message} />
            ))}
            </div>

            <Input 
                inputRef={input => input && input.focus()}
                autoFocus
                onKeyPress={handlePressInput}
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                placeholder="Введите сообщение..."
                endAdornment={
                    <InputAdornment position="end">
                      {textAreaValue && (
                            <Send className="icon" onClick={sendMessage} />
                      )}
                    </InputAdornment>
                  }
            ></Input>
        </>

    );
}

