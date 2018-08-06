let initialState = {
  firstName: "",
  lastName: "",
  age: "",
  bootcampName: "",
  location: "",
  roles: "",
  aLittleAboutMyself: "",
  learningOrTrying: "",
  favoriteLanguages: "",
  skillsOrLanguages: "",
  projectsAndHacks: "",
  avatar: ""
};

// action constants
const UPDATE_ROLES = "UPDATE_ROLES";
const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
const UPDATE_LASTNAME = "UPDATE_LASTNAME";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_BOOTCAMP_NAME = "UPDATE_BOOTCAMP_NAME";
const UPDATE_LOCATION = "UPDATE_LOCATION";
const UPDATE_A_LITTLE_ABOUT_MYSELF = "UPDATE_A_LITTLE_ABOUT_MYSELF";
const UPDATE_LEARNING_OR_TRYING = "UPDATE_LEARNING_OR_TRYING";
const UPDATE_FAVORITE_LANGUAGES = "UPDATE_FAVORITE_LANGUAGES";
const UPDATE_SKILLS_OR_LANGUAGES = "UPDATE_SKILLS_OR_LANGUAGES";
const UPDATE_PROJECTS_AND_HACKS = "UPDATE_PROJECTS_AND_HACKS";
const UPDATE_AVATAR = "UPDATE_AVATAR";

// the reducer
export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ROLES:
      return Object.assign({}, state, { roles: action.payload });
    case UPDATE_FIRSTNAME:
      return Object.assign({}, state, { firstName: action.payload });
    case UPDATE_LASTNAME:
      return Object.assign({}, state, { lastName: action.payload });
    case UPDATE_AGE:
      return Object.assign({}, state, { age: action.payload });
    case UPDATE_BOOTCAMP_NAME:
      return Object.assign({}, state, { bootcampName: action.payload });
    case UPDATE_LOCATION:
      return Object.assign({}, state, { location: action.payload });
    case UPDATE_A_LITTLE_ABOUT_MYSELF:
      return Object.assign({}, state, { aLittleAboutMyself: action.payload });
    case UPDATE_LEARNING_OR_TRYING:
      return Object.assign({}, state, { learningOrTrying: action.payload });
    case UPDATE_FAVORITE_LANGUAGES:
      return Object.assign({}, state, { favoriteLanguages: action.payload });
    case UPDATE_SKILLS_OR_LANGUAGES:
      return Object.assign({}, state, { skillsOrLanguages: action.payload });
    case UPDATE_PROJECTS_AND_HACKS:
      return Object.assign({}, state, { projectsAndHacks: action.payload });
    case UPDATE_AVATAR:
      return Object.assign({}, state, { avatar: action.payload });
    default:
      return state;
  }
}

// action creators

export function updateRoles(roles) {
  return {
    type: UPDATE_ROLES,
    payload: roles
  };
}

export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: firstName
  };
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_LASTNAME,
    payload: lastName
  };
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    payload: age
  };
}

export function updateBootcampName(bootcampName) {
  return {
    type: UPDATE_BOOTCAMP_NAME,
    payload: bootcampName
  };
}

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location
  };
}

export function updateALittleAboutMyself(aLittleAboutMyself) {
  return {
    type: UPDATE_A_LITTLE_ABOUT_MYSELF,
    payload: aLittleAboutMyself
  };
}

export function updateLearningOrTrying(learningOrTrying) {
  return {
    type: UPDATE_LEARNING_OR_TRYING,
    payload: learningOrTrying
  };
}

export function updateFavoriteLanguages(favoriteLanguages) {
  return {
    type: UPDATE_FAVORITE_LANGUAGES,
    payload: favoriteLanguages
  };
}

export function updateSkillsOrLanguages(skillsOrLanguages) {
  return {
    type: UPDATE_SKILLS_OR_LANGUAGES,
    payload: skillsOrLanguages
  };
}

export function updateProjectsAndHacks(projectsAndHacks) {
  return {
    type: UPDATE_PROJECTS_AND_HACKS,
    payload: projectsAndHacks
  };
}

export function updateAvatar(avatar) {
  return {
    type: UPDATE_AVATAR,
    payload: avatar
  };
}
