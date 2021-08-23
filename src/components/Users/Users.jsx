import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/no_avatar.png";
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
          <span
            key={p}
            className={props.currentPage === p ? s.selectedPage : ""}
            onClick={(e) => props.onPageChanged(p)}
          >
            {p}/
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                alt="ava"
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={s.ava}
              />
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
