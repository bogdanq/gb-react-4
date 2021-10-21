import { createStore, combineReducers } from "redux";
import { ProfileReducer } from "./profile/reduser";

let initialState = {
  showName: true,
  name: 'Default',
  count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SHOWNAME":
      return {
        ...state, showName: !state.showName
        }
      default:
        return state;
    }
  };
  
  export const store = createStore(
    combineReducers({
      profile: reducer,
      // profile: ProfileReducer
    })
  );