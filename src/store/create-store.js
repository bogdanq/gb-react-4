import { createStore, combineReducers } from "redux";
import { ProfileReducer } from "./profile/reduser";
  
  export const store = createStore(
    combineReducers({
      profile: ProfileReducer,
    })
  );