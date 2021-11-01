import { clearMessageValue } from "../conversations";
import { sendMessage } from "./actions";

export const sendMessageWithThunk =
  (message, roomId) => (dispatch, getState) => {
    dispatch(sendMessage(message, roomId));

    dispatch(clearMessageValue(roomId));

    // if (message.author === "User") {
    //   setTimeout(() => {
    //     dispatch(
    //       sendMessage({ author: "Bot", value: "Hello from bot" }, roomId)
    //     );
    //   }, 500);
    // }
  };

export const getMessagesFB = () => async (dispatch, _, api) => {
  try {
    const data = await api.getMessagesApi();

    const messages = {};

    data.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    console.log("data", messages);
    //conversations => messages
  } catch {}
};
