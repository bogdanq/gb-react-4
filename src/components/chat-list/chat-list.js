import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import {
  conversationsSelector,
  createConversation,
  deleteConversation,
  deleteConversationWithThunk
} from "../../store/conversations";
import { Chat } from "./chat";
import { useDispatch, useSelector } from "react-redux";

export const ChatList = () => {
  const params = useParams();
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();

  const createConversationWithName = () => {
    const title = prompt("введите название беседы:");

    if (title) {
      dispatch(createConversation(title));
    }
  };

  function deleteConversation(title) {
    // dispatch(deleteConversationWithThunk(roomId));
    // dispatch(deleteConversation(roomId));
  }

  return (
    <List component="nav">
      <button onClick={createConversationWithName}>createConversation</button>
      {conversations.map((chat, index) => (
        <>
          <Link key={index} to={`/chat/${chat.title}`}>
            <Chat
              title={chat.title}
              selected={chat.title === params.roomId}
              {...chat}
            />
          </Link>
          <button onClick={() => deleteConversation(chat.title)}>Delete</button>
        </>
      ))}
    </List>
  );
};
