import { clearMessageValue } from "../conversations";
import { sendMessage } from "./actions";

export const sendMessageWithThunk =
  (message, roomId) => (dispatch, getState) => {
    const c = dispatch(sendMessage(message, roomId));
  };
