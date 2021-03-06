import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeclassname={s.activeLink}>
          <img
            alt="Profile"
            src="https://img.icons8.com/small/24/000000/gender-neutral-user.png"
          />
          <div>Profile</div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeclassname={s.activeLink}>
          <img
            alt="News"
            src="https://img.icons8.com/material-outlined/24/000000/news.png"
          />
          <div>News</div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeclassname={s.activeLink}>
          <img
            alt="Dialogs"
            src="https://img.icons8.com/material-outlined/24/000000/speech-bubble-with-dots.png"
          />
          <div>Dialogs</div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends" activeclassname={s.activeLink}>
          <img
            alt="Friends"
            src="https://img.icons8.com/ios/24/000000/friends.png"
          />
          <div>Friends</div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeclassname={s.activeLink}>
          <img
            alt="Music"
            src="https://img.icons8.com/small/24/000000/headphones.png"
          />
          <div>Music</div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeclassname={s.activeLink}>
          <img
            alt="Settings"
            src="https://img.icons8.com/small/24/000000/settings.png"
          />
          <div>Settings</div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeclassname={s.activeLink}>
          <img
            alt="Users"
            src="https://img.icons8.com/ios/24/000000/groups.png"
          />
          <div>Users</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
