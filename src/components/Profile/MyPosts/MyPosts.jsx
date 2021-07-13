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
        <h3>My posts</h3>
        <div>
          <form>
            <textarea
              name="text"
              cols="15"
              rows="5"
              ref={newPostElement}
            ></textarea>
            <button type="submit" onClick={addPost}>
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
