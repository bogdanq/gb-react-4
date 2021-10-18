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
  });
});

export const MessageList = ({ messages, sendMessage, value, handleChangeValue }) => {
  const s = useStyles();

  // const [value, setValue] = useState("");

  const handlePressInput = ({ code }) => {
    if (code === "Enter" && value) {
      sendMessage({ value, author: "User" });
      // value("");
    }
  };

  const handleSendMessage = () => {
    if (value) {
      sendMessage({ value, author: "User" });
      // value("");
    }
  };

  return (
    <>
      <div>
        {messages.map((message, id) => (
          <Message key={message.value} message={message} />
        ))}
      </div>

      <Input
        className={s.input}
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
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
    </>
  );
};
