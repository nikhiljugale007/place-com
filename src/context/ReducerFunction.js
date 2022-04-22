const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_USER":
      return {
        ...state,
        userData: { ...state.userData, isLoggedIn: true, data: action.payload },
      };
    case "LOGOUT_USER":
      return {
        ...state,
        userData: { ...state.userData, isLoggedIn: false },
      };
    case "SET_DRIVES": {
      return {
        ...state,
        drives: action.payload,
      };
    }
    case "ADD_TO_APPLIED_DRIVE": {
      return {
        ...state,
        appliedDrives: action.payload,
      };
    }
    case "RESET_VIDEO_STATE": {
      return {
        ...state,
        drives: [],
        appliedDrives: [],
        staredDrives: [],
        userData: {
          isLoggedIn: false,
        },
      };
    }
    default:
      return state;
  }
};
export { ReducerFunction };
