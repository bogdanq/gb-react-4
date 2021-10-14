import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
  Header,
  MessageList,
  MainTemplate,
  ChatList,
  MessageProvider,
} from "../components";

// @TODO
// const messages =  {
//   room1: [],
//   room2: [],
// }
// messages[roomId]

export function ChatPage() {
  const { push } = useHistory();

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

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <MessageProvider>
          {([state, actions]) => (
            <MainTemplate header={<Header />} chats={<ChatList />}>
              <Route path="/chat/:roomId">
                <MessageList {...state} sendMessage={actions.sendMessage} />
              </Route>

              <Route exact path="/chat">
                <h1>Выберите диалог</h1>
              </Route>
            </MainTemplate>
          )}
        </MessageProvider>
      </Route>
    </Switch>
  );
}
