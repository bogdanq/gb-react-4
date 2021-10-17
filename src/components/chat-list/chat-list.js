import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const [chats] = useState(["Eric Theodore Cartman", "Kyle Broflovski", "Kenny McCormick"]); // {title: "room1", value: "input value"}
  const params = useParams();

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === params.roomId} />
        </Link>
      ))}
    </List>
  );
};
