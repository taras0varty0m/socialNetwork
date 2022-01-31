import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { getProfile, getStatus, updateStatus } = props;
  const params = useParams();
  const userId = params.userId || props.userId;

  useEffect(() => {
    if (userId) {
      getProfile(userId);
      getStatus(userId);
    }
  }, [userId]);
  return (
    <Profile
      profile={props.profile}
      status={props.status}
      updateStatus={updateStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.auth.userId,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
  }),
  withAuthRedirect
)(ProfileContainer);
