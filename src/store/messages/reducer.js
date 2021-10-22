import { nanoid } from "nanoid";

const initialState = {
  messages: {
    room1: [{ value: "Room1", author: "Bot", id: nanoid() }],
    room2: [{ value: "Room2", author: "Bot", id: nanoid() }],
  },
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
