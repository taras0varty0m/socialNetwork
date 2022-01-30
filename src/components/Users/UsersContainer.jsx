import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  follow,
  setCurrentPage,
  unfollow,
  getUsers,
} from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";

const UsersContainer = (props) => {
  const { currentPage, pageSize, getUsers, isFetching, setCurrentPage } = props;
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [currentPage, getUsers, pageSize]);

  const onPageChanged = useCallback(
    (page) => {
      getUsers(page, pageSize);
      setCurrentPage(page);
    },
    [getUsers, pageSize, setCurrentPage]
  );

  return (
    <>
      {isFetching && <Preloader />}
      <Users {...props} onPageChanged={onPageChanged} />
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

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,

    follow,

    unfollow,

    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
