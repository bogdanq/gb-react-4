import {
  SEND_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_ERROR,
  GET_MESSAGES_SUCESS,
} from "./types";

const initialState = {
  messages: {},
  messagesLoading: false,
  messagesError: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            { ...action.payload.message, date: new Date() },
          ],
        },
      };
    case GET_MESSAGES_START:
      return {
        ...state,
        messagesLoading: true,
      };
    case GET_MESSAGES_SUCESS:
      return {
        ...state,
        messagesLoading: false,
        messages: action.payload,
      };
    case GET_MESSAGES_ERROR:
      return {
        ...state,
        messagesLoading: false,
        messagesError: action.payload,
      };
    default:
      return state;
  }
};
