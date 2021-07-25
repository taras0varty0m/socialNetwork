import { ADD_POST, UPDATE_NEW_POST_TEXT } from "./ADD_POST";

const profileReducer = (state, action) => {
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
