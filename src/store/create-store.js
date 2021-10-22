import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // => getState, subscribe, dispatch
