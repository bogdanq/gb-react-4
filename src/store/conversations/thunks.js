
import { clearMessageValue } from "../conversations";
import { deleteConersation } from "./actions";

export const deleteConversationWithThunk =
(roomId) => (dispatch, getState) => {
  const c = dispatch(deleteConersation(roomId));
};

// thunks не было
