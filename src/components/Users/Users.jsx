import React from "react";
import s from "./Users.module.css";
const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: "Dmitri",
        status: "i'm horse pegs",
        photoURL:
          "https://www.meme-arsenal.com/memes/24ea176ff61da30ee142f0dbca6dcc90.jpg",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        followed: false,
        fullName: "Sasha",
        status: "i'm horse pegs",
        photoURL:
          "https://www.meme-arsenal.com/memes/24ea176ff61da30ee142f0dbca6dcc90.jpg",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 3,
        followed: true,
        fullName: "Misha",
        status: "i'm horse pegs",
        photoURL:
          "https://www.meme-arsenal.com/memes/24ea176ff61da30ee142f0dbca6dcc90.jpg",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 4,
        followed: true,
        fullName: "Glasha",
        status: "i'm horse pegs",
        photoURL:
          "https://www.meme-arsenal.com/memes/24ea176ff61da30ee142f0dbca6dcc90.jpg",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }

  return (
    <div className={s.content}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img alt="ava" src={u.photoURL} className={s.ava} />
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
