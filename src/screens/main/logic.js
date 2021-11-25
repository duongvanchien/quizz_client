const ActionTypes = {
  LOAD_USER_IN_ROOM: "LOAD_USER_IN_ROOM",
};

export const initState = {
  users: [],
};

export const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_USER_IN_ROOM:
      state.users = action.users;
      return {...state};
    default:
      return {...state};
  }
};

export const loadUsersInRoom = (users) => {
  return {
    type: ActionTypes.LOAD_USER_IN_ROOM,
    users,
  };
};
