export const getConversationsFB = () => async (dispatch, _, api) => {
  try {
    const data = await api.getConversationsApi();

    const conversations = [];

    data.forEach((snap) => {
      conversations.push(snap.val());
    });

    console.log("data", conversations);

    //conversations => reducer
  } catch {}
};
