import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "../../api/api";

const ProfileContainer = (props) => {
  const { setUserProfile } = props;
  const userId = props.match.params.userId || props.userId;
  useEffect(() => {
    getUserProfile(userId).then((response) => {
      setUserProfile(response.data);
    });
  }, [userId, setUserProfile]);
  return <Profile {...props} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.auth.userId,
});
const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainerWithRouter);
