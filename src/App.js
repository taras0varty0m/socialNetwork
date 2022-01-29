import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />

      <Navbar />

      <div className="app-wrapper-content">
        <Switch>
          <Route exact path="/">
            <Redirect to="/news" />
          </Route>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId" render={() => <ProfileContainer />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
