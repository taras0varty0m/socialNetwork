import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData, logout } from "../../redux/authReducer";
const HeaderContainer = (props) => {
  const { getAuthUserData } = props;

  React.useEffect(() => {
    getAuthUserData();
  });

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
