import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/no_avatar.png"
const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        console.log(response.data.items)
        props.setUsers(response.data.items);
      });
  }

  return (
    <div className={s.content}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img alt="ava" src={u.photos.small != null ? u.photos.small : userPhoto} className={s.ava} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>shortname: {u.name}</div>
              <div>{u.status != null ? "status:" + u.status : ""}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
