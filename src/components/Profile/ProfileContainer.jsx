import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";

const ProfileContainer = (props) => {
  const { setUserProfile } = props;
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
      .then((response) => {
        setUserProfile(response.data);
      });
  }, [setUserProfile]);
  return <Profile {...props} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
