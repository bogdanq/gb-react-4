import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { Message } from "./message";
import styles from "./message-list.module.css";

const useStyles = makeStyles((ctx) => {
  return createStyles({
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
    },
    wrapper: {
      border: "1px solid red",
    },
  });
});

export const MessageList = () => {
  const s = useStyles();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    { value: "Hello", author: "User" },
    { value: "Hello123", author: "Bot" },
  ]);

  const handleSendMessage = () => {
    if (value) {
      setMessages((state) => [...state, { value, author: "User" }]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" && value) {
      handleSendMessage();
    }
  };

  // const sort1 = () => {
  //   setMessages([...messages].sort((a, b) => b.value.length - a.value.length));
  // };
  // const sort2 = () => {
  //   setMessages([...messages].sort((a, b) => a.value.length - b.value.length));
  // };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Helloo from bot", author: "Bot" },
        ]);
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  return (
    <div className={s.wrapper}>
      <div>
        {messages.map((message, id) => (
          <Message key={message.value} message={message} />
        ))}
      </div>

      <Input
        className={s.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите сообщение..."
        fullWidth={true}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send className={styles.icon} onClick={handleSendMessage} />
            )}
          </InputAdornment>
        }
      />
    </div>
  );
};
