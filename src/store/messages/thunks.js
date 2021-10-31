import { clearMessageValue } from "../conversations";
import { sendMessage, deleteMessage } from "./actions";

export const sendMessageWithThunk =
  (message, roomId) => (dispatch, getState) => {
    const c = dispatch(sendMessage(message, roomId));

    dispatch(clearMessageValue(roomId));
  };

  export const deleteMessageWithThunk =
  (message, roomId) => (dispatch, getState) => {
    const c = dispatch(deleteMessage(message, roomId));
  };
