import React from "react";
import s from "./Friends.module.css";
const Friends = (props) => {
  const friends = props.friendsData.map((friend) => (
    <div className={s.friend}>
      <img src={friend.avatar} alt="avatar" className={s.avatar} />
      <div className={s.friendName}>{friend.name}</div>
    </div>
  ));
  return <>{friends}</>;
};
export default Friends;
