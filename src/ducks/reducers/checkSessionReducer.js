
let initialState = {
  user: {}
};
// action types
const CHECK_USER_SESSION = "CHECK_USER_SESSION";

export default function checkSessionReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_USER_SESSION:
      return Object.assign({}, state, { user: action.payload });
    default:
      return state;
  }
}


export function checkUserSession(user) {
  return {
    type: CHECK_USER_SESSION,
    payload: user
  };
}





