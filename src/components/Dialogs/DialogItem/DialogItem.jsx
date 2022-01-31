import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeclassname={s.activeLink}>
        <img src={props.ava} alt="avatar" className={s.ava} />
        <br />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
