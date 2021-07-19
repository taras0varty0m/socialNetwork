import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        postData={props.postData}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
    </div>
  );
};

export default Profile;
