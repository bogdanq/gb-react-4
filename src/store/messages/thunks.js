import { clearMessageValue } from "../conversations";
import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
} from "./actions";

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
    dispatch(getMessagesStart());
    const data = await api.getMessagesApi();

    const messages = {};

    data.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch {
    dispatch(getMessagesError("Ошибка при получении сообщений"));
  }
};
