import React from "react";
import { connect } from "react-redux";
import LoginContainer from "../components/Login/LoginContainer";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (WrappedComponent) => {
  const hocComponent = ({ ...props }) =>
    props.isAuth ? <WrappedComponent {...props} /> : <LoginContainer />;

  const connectedAuthRedirectComponent = connect(mapStateToProps)(hocComponent);

  return connectedAuthRedirectComponent;
};
