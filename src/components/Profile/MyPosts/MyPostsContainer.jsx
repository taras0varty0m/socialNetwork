import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
  };
};

export const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);
