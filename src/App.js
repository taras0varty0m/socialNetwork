import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />

      <Navbar />

      <div className="app-wrapper-content">
        <Routes>
          <Route index element={<Navigate to="/news" />}></Route>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile/" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
