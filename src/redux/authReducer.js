import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const CLEAR_AUTH_USER = "CLEAR_AUTH_USER";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    case CLEAR_AUTH_USER:
      return initialState;
    default:
      return state;
  }
};

const setAuthUserDataSuccess = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

const clearAuthUser = () => ({
  type: CLEAR_AUTH_USER,
});
export const getAuthUserData = () => (dispatch) => {
  AuthAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserDataSuccess(id, email, login));
    }
  });
};

export const login =
  ({ email, password, remember, captcha }) =>
  (dispatch) => {
    AuthAPI.login({ email, password, remember, captcha }).then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserDataSuccess(id, email, login));
      }
    });
  };

export const logout = () => (dispatch) => {
  AuthAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(clearAuthUser());
    }
  });
};
export default authReducer;
