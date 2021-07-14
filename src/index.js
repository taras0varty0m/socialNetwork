import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, state, subscribe, upadateNewPostText } from "./redux/state";
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      upadateNewPostText={upadateNewPostText}
    />,
    document.getElementById("root")
  );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);
