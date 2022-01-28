import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";
const UsersContainer = ({
  toggleIsFetching,
  currentPage,
  pageSize,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  isFetching,
  totalUsersCount,
  users,
  unfollow,
  follow,
}) => {
  useEffect(() => {
    toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
  }, [currentPage, pageSize, setTotalUsersCount, setUsers, toggleIsFetching]);
  const onPageChanged = useCallback(
    (p) => {
      setCurrentPage(p);
      toggleIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${pageSize}`
        )
        .then((response) => {
          toggleIsFetching(false);
          setUsers(response.data.items);
        });
    },
    [pageSize, setCurrentPage, setUsers, toggleIsFetching]
  );
  return (
    <>
      {isFetching && <Preloader />}
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        users={users}
        unfollow={unfollow}
        follow={follow}
      />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
export default connect(mapStateToProps, {
  setCurrentPage,

  follow,

  unfollow,

  setUsers,

  setTotalUsersCount,

  toggleIsFetching,
})(UsersContainer);
