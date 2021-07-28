import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <MyPosts
            newPostText={store.getState().profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
            postData={store.getState().profilePage.postData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
