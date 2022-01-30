import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login/Login";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (WrappedComponent) => {
  const hocComponent = ({ ...props }) =>
    props.isAuth ? <WrappedComponent {...props} /> : <Login />;

  const connectedAuthRedirectComponent = connect(mapStateToProps)(hocComponent);

  return connectedAuthRedirectComponent;
};
