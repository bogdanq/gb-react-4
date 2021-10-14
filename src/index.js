import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { Header, MessageList, Layout, ChatList } from "./components";
import "./global.css";

const light = createTheme({
  theme: {
    color: "red",
  },
});

ReactDOM.render(
  <ThemeProvider theme={light}>
    <Layout
      header={<Header />}
      chats={<ChatList />}
      messages={<MessageList />}
    />
  </ThemeProvider>,
  document.getElementById("root")
);
