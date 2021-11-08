import {
  SEND_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_ERROR,
  GET_MESSAGES_SUCESS,
} from "./types";

export const sendMessage = (message, roomId) => {
  return {
    type: SEND_MESSAGE,
    payload: { message, roomId },
    meta: {
      delay: 500,
    },
  };
};

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCESS,
  payload: messages,
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});
