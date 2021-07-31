import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar />

      <div className="app-wrapper-content">
        <Switch>
          <Route exact path="/">
            <Redirect to="/news" />
          </Route>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile />} />
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
