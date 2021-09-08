import React from "react";
import { Link } from "react-router-dom";
import s from "./NotFound.module.css";
const NotFound = () => (
  <div className={s.container}>
    <h1>404 - Not Found! Fuck you</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
