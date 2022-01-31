import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: "hi? how are you", likesCount: 12 },
    { id: 2, message: "It`s my first post", likesCount: 6 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postData.length + 1,
        message: action.postText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });

const setProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setUserStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then((response) => {
    if (response.data) dispatch(setUserStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) dispatch(setUserStatus(status));
  });
};

export const getProfile = (userId) => (dispatch) => {
  ProfileAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response.data));
  });
};

export default profileReducer;
