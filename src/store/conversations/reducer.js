import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  CLEAR_MESSAGE_VALUE,
  DELETE_CONVERSATION,
} from "./types";

const initialState = {
  conversations: [
    { title: "room1", value: "" },
    { title: "room2", value: "" },
  ],
};

const updateConversations = (state, roomId, value) =>
  state.conversations.map((conversation) => {
    return conversation.title === roomId
      ? { ...conversation, value }
      : conversation;
  });

  const deleteConersation = (state, roomId) => {

    let conversations = state.conversations;
    let filteredConversations = conversations.filter((conversation) => conversation.title !== roomId)

    return filteredConversations
  };


export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(
          state,
          action.payload.roomId,
          action.payload.value
        ),
      };
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...state.conversations,
          { title: action.payload, value: "" },
        ],
      };
    case CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(state, action.payload, ""),
      };
    case DELETE_CONVERSATION:
      return {
        ...state, 
        conversations: deleteConersation(state, action.payload),
      };

    default:
      return state;
  }
};
