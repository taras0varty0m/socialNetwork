import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../api/api";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleFollowingProgress,
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
  followingInProgress,
  toggleFollowingProgress,
}) => {
  useEffect(() => {
    toggleIsFetching(true);

    getUsers(currentPage, pageSize).then((data) => {
      toggleIsFetching(false);
      setUsers(data.items);
      setTotalUsersCount(data.totalCount);
    });
  }, [currentPage, pageSize, setTotalUsersCount, setUsers, toggleIsFetching]);

  const onPageChanged = useCallback(
    (page) => {
      setCurrentPage(page);
      toggleIsFetching(true);

      getUsers(page, pageSize).then((data) => {
        toggleIsFetching(false);
        setUsers(data.items);
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
        followingInProgress={followingInProgress}
        toggleFollowingProgress={toggleFollowingProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,

  follow,

  unfollow,

  setUsers,

  setTotalUsersCount,

  toggleIsFetching,

  toggleFollowingProgress,
})(UsersContainer);
