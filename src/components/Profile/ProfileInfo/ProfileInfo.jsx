import React from "react";
import { ProfileStatus } from "./../ProfileStatus";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/no_avatar.png";
const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;
  return (
    <div className={s.content}>
      <div className={s.descriptionBlock}>
        <div>{props.profile.fullName}</div>
        <img
          src={props.profile.photos.large || userPhoto}
          alt="profile avatar"
        />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
