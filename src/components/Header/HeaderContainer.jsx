import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer";
import { authMe } from "../../api/api";
const HeaderContainer = (props) => {
  const { setAuthUserData } = props;

  React.useEffect(() => {
    authMe().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        setAuthUserData(id, email, login);
      }
    });
  }, [setAuthUserData]);
  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
