import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/no_avatar.png";

class Users extends React.Component {
  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
              className={this.props.currentPage === p ? s.selectedPage : ""}
              onClick={(e) => this.onPageChanged(p)}
            >
              {p}
            </span>
          ))}
        </div>
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
