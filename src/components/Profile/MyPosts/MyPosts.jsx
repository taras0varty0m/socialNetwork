import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
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
              ref={newPostElement}
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
