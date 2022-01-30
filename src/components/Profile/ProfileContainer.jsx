import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { getUserProfile } = props;

  const userId = props.match.params.userId || props.userId;

  useEffect(() => {
    getUserProfile(userId);
  }, [getUserProfile, userId]);
  return <Profile {...props} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer);
