import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { MessageList, MainTemplate, ChatList } from "../components";
import { getConversationsFB } from "../store/conversations";
import { getMessagesFB } from "../store/messages";

export function ChatPage() {
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const listenExistChat = ({ code }) => {
      if (code === "Escape") {
        push("/chat");
      }
    };

    document.addEventListener("keydown", listenExistChat);

    return () => {
      document.removeEventListener("keydown", listenExistChat);
    };
  }, [push]);

  useEffect(() => {
    dispatch(getConversationsFB());
    const r = dispatch(getMessagesFB());

    console.log("r", r);
  }, [dispatch]);

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <MainTemplate chats={<ChatList />}>
          <Route path="/chat/:roomId">
            <MessageList />
          </Route>
          <Route exact={true} path="/chat">
            <h1>выберите сообщение</h1>
          </Route>
        </MainTemplate>
      </Route>
      <Route path="*">
        <h1>такого чата нет</h1>
      </Route>
    </Switch>
  );
}
