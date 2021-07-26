import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import NotFound from "./components/NotFound/NotFound";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar />

      <div className="app-wrapper-content">
        <Switch>
          <Route exact path="/">
            <Redirect to="/news" />
          </Route>
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.dialogsReducer.dialogsData}
                messagesData={props.state.dialogsReducer.messagesData}
                newMessageText={props.state.dialogsReducer.newMessageText}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                postData={props.state.profileReducer.postData}
                newPostText={props.state.profileReducer.newPostText}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/news" render={() => <News />} />
          <Route
            path="/friends"
            render={() => (
              <Friends friendsData={props.state.friendsReducer.friendsData} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
