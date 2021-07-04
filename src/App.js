import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.profilePage.dialogsData}
                messegesData={props.state.messegesPage.messegesData}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile postData={props.state.profilePage.postData} />
            )}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/news" render={() => <News />} />
          <Route
            path="/friends"
            render={() => (
              <Friends friendsData={props.state.friendsPage.friendsData} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
