import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

const initialState = {
  messages: {
    room1: [{ value: "Room1", author: "Bot", date: new Date() }],
    room2: [{ value: "Room2", author: "Bot", date: new Date() }],
  },
};

const deleteMessage = (state, roomId, value) => {

  let messages = state.messages[roomId];

  let filteredMessages = messages.filter((item) => item.value !== value);

  return filteredMessages
}

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
    case DELETE_MESSAGE: 
    return {
      ...state,
      messages: {
        ...state.messages,
        [action.payload.roomId]: deleteMessage(state, action.payload.roomId, action.payload.message.value)
      },
    };
    default:
      return state;
  }
};
