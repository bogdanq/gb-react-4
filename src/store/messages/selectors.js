export const lastMessageSelector = (roomId) => (state) => {
    const messages = state.messages.messages[roomId];
    if(messages === undefined) {
      return messages;
    } else {
      return messages[messages.length - 1];
    }
  };
  
  export const messagesSelector = (roomId) => (state) => {
    return state.messages.messages[roomId] || [];
  };