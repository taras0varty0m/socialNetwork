import React from "react";
import { LoginForm } from "./LoginForm";

const Login = (props) => {
  const onSubmit = (data) => {
    props.login(data);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
