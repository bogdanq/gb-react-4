import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (message, roomId) => {
  return {
    type: SEND_MESSAGE,
    payload: { message, roomId },
    meta: {
      delay: 500,
    },
  };
};

export const deleteMessage = (message, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { message, roomId },
});

