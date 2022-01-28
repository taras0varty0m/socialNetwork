import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/no_avatar.png";
import { NavLink } from "react-router-dom";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.content}>
      <div>
        {pages.map((p) => (
          <button
            key={p}
            className={props.currentPage === p ? s.selectedPage : ""}
            onClick={(e) => props.onPageChanged(p)}
          >
            {p}
          </button>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  alt="ava"
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.ava}
                />
              </NavLink>
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
