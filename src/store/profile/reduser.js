

let initialState = {
  showName: true,
  name: 'Default',
  count: 0
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SHOWNAME":
      return {
        ...state, showName: !state.showName
        }
      default:
        return state;
    }
  };