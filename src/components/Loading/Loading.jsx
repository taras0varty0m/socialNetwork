import React from "react";
import s from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={s["preloader"]}>
      <div className={s["box"]}>
        <div className={s["box__inner"]}>
          <div className={s["box__back-flap"]}></div>
          <div className={s["box__right-flap"]}></div>
          <div className={s["box__front-flap"]}></div>
          <div className={s["box__left-flap"]}></div>
          <div className={s["box__front"]}></div>
        </div>
      </div>
      <div className={s["box"]}>
        <div className={s["box__inner"]}>
          <div className={s["box__back-flap"]}></div>
          <div className={s["box__right-flap"]}></div>
          <div className={s["box__front-flap"]}></div>
          <div className={s["box__left-flap"]}></div>
          <div className={s["box__front"]}></div>
        </div>
      </div>
      <div className={s["line"]}>
        <div className={s["line__inner"]}></div>
      </div>
      <div className={s["line"]}>
        <div className={s["line__inner"]}></div>
      </div>
      <div className={s["line"]}>
        <div className={s["line__inner"]}></div>
      </div>
      <div className={s["line"]}>
        <div className={s["line__inner"]}></div>
      </div>
      <div className={s["line"]}>
        <div className={s["line__inner"]}></div>
      </div>
      <div className={s["line"]}>
        <div className={s["line__inner"]}></div>
      </div>
      <div className={s["line"]}>
        <div className={s["line__inner"]}></div>
      </div>
    </div>
  );
};
