let initialState = {
    //  id: 0 because you already have an access to checkSessionReducer.js
    publishPhoto: "Publish Photo",
  };
  
  // action constants
  const UPDATE_PUBLISH_PHOTO = "UPDATE_PUBLISH_PHOTO";
  
  
  // the reducer
  export default function makePostReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_PUBLISH_PHOTO:
        return Object.assign({}, state, { publishPhoto: action.payload });
      default:
        return state;
    }
  }
  
  // action creators

    export function updatePublishPhoto(publishPhoto) {
    return {
      type: UPDATE_PUBLISH_PHOTO,
      payload: publishPhoto
    };
  }
