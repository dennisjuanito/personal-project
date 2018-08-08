let initialState = {
  //  id: 0 because you already have an access to checkSessionReducer.js
  type: "Post",
  publishDate: "",
  publishRelativeTimeFromNow: "",
  postTitle: "",
  postPhoto: "",
  postContents: ""
};

// action constants
const UPDATE_PUBLISH_DATE = "UPDATE_PUBLISH_DATE";
const UPDATE_PUBLISH_RELATIVE_TIME_FROM_NOW = "UPDATE_PUBLISH_RELATIVE_TIME_FROM_NOW";
const UPDATE_POST_TITLE = "UPDATE_POST_TITLE";
const UPDATE_POST_PHOTO = "UPDATE_POST_PHOTO";
const UPDATE_POST_CONTENTS = "UPDATE_POST_CONTENTS";


// the reducer
export default function makePostReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PUBLISH_DATE:
      return Object.assign({}, state, {
        publishDate: action.payload
      });
    case UPDATE_PUBLISH_RELATIVE_TIME_FROM_NOW:
      return Object.assign({}, state, {
        publishRelativeTimeFromNow: action.payload
      });
    case UPDATE_POST_TITLE:
      return Object.assign({}, state, { postTitle: action.payload });
    case UPDATE_POST_PHOTO:
      return Object.assign({}, state, { postPhoto: action.payload });
    case UPDATE_POST_CONTENTS:
      return Object.assign({}, state, { postContents: action.payload });
    default:
      return state;
  }
}

// action creators

export function updatePublishDate(publishDate) {
  return {
    type: UPDATE_PUBLISH_DATE,
    payload: publishDate
  };
}

export function updatePublishRelativeTimeFromNow(publishRelativeTimeFromNow) {
  return {
    type: UPDATE_PUBLISH_RELATIVE_TIME_FROM_NOW,
    payload: publishRelativeTimeFromNow
  };
}
export function updatePostTitle(postTitle) {
  return {
    type: UPDATE_POST_TITLE,
    payload: postTitle
  };
}

export function updatePostPhoto(postPhoto) {
  return {
    type: UPDATE_POST_PHOTO,
    payload: postPhoto
  };
}

export function updatePostContents(postContents) {
  return {
    type: UPDATE_POST_CONTENTS,
    payload: postContents
  };
}
