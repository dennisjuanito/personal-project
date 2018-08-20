let initialState = {
  publishes: []
};

// action types
const UPDATE_PUBLISHES = "UPDATE_PUBLISHES";

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PUBLISHES:
      return Object.assign({}, state, { publishes: action.payload });
    default:
      return state;
  }
}

// action creators
export function updatePublishes(publishes) {
    return {
        type: UPDATE_PUBLISHES,
        payload: publishes
    }
}