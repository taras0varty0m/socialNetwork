import { UserAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  postData: [
    { id: 1, message: "hi? how are you", likesCount: 12 },
    { id: 2, message: "It`s my first post", likesCount: 6 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (!state.newPostText.length) {
        alert("post can't be empty");
        return state;
      }
      let newPost = {
        id: state.postData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newPostText };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (newPostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => (dispatch) => {
  UserAPI.getUserProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export default profileReducer;
