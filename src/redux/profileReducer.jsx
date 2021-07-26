import { ADD_POST, UPDATE_NEW_POST_TEXT } from "./ActionType";
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
let initialState = {
  postData: [
    { id: 1, message: "hi? how are you", likesCount: 12 },
    { id: 2, message: "It`s my first post", likesCount: 6 },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (!state.newPostText.length) {
        alert("post can't be empty");
        return;
      }
      let newPost = {
        id: state.postData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export default profileReducer;
