import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pWEq0Ws2LvaUdaL54gjglSViYF4IVL70GFVIk18uryQ9S1tO5NKtFKKEaYHRFKDFz9E&usqp=CAU"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <button onClick={props.logout}>{props.login}</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
