import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { Chat } from "./chat";

export const ChatList = ({ createConversation, conversations }) => {
  const params = useParams();

  return (
    <List component="nav">
      <button onClick={createConversation}>createConversation</button>
      {conversations.map((chat, index) => (
        <Link key={index} to={`/chat/${chat.title}`}>
          <Chat title={chat.title} selected={chat.title === params.roomId} />
        </Link>
      ))}
    </List>
  );
};
