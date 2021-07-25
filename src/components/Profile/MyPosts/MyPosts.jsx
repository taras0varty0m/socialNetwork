import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <div className={s.form}>
            <h3>My posts</h3>
            <textarea
              name="text"
              rows="3"
              value={props.newPostText}
              onChange={onPostChange}
              placeholder="Поделитесь чем угодно(в рамках приличия =) )"
            />
            <br />
            <button onClick={addPost} className={s.submit}>
              Add post
            </button>
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
