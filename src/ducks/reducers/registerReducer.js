let initialState = {
    firstName: ""
}

// action constants
const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME"
export default function registerReducer(state=initialState, action) {
    switch (action.type) {
        case UPDATE_FIRSTNAME:
            return Object.assign({}, state, {firstName: action.payload});
    
        default:
            return state;
    }
}

// action methods

export function updateFirstname(firstName) {
    return {
        type: UPDATE_FIRSTNAME,
        payload: firstName
    }
}