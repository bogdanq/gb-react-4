import { INCREMENT } from "./types";

export const ProfileReducer = (state = { name: "Test" }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


// const initialState = {
//     showName: false,
//     name: 'Default'
//   }

//   const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "showName":
//         return {
//           ...state,
//           showName: !state.showName
//         }
//         default:
//           return state
//     }
//   }
