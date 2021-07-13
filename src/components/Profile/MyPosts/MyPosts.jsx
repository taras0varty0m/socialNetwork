import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  let newPostElement = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <form className={s.form}>
            <h3>My posts</h3>
            <textarea name="text" rows="3" ref={newPostElement}></textarea>
            <br />
            <button type="submit" onClick={addPost} className={s.submit}>
              Add post
            </button>
          </form>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
