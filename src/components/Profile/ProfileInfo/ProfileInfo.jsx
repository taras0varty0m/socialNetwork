import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/no_avatar.png";
const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;

  return (
    <div className={s.content}>
      <div>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="like"
          className={s.postImage}
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={props.profile.photos.large || userPhoto}
          alt="profile avatar"
        />{" "}
        + description
      </div>
    </div>
  );
};

export default ProfileInfo;
