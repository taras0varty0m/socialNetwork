import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import dialogsReducer from "./dialogsReducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
