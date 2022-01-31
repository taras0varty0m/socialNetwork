import React from "react";
import { AddPostForm } from "./AddPostForm";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const addPost = ({ postText }) => {
    props.addPost(postText);
  };
  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <div className={s.form}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={addPost} />
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
