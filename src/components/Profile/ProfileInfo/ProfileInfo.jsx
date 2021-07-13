import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="like"
          className={s.postImage}
        />
      </div>
      <div className={s.descritptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
