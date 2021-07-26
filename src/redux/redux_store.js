import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import dialogsReducer from "./dialogsReducer";
let reducers = combineReducers({
  profileReducer,
  friendsReducer,
  dialogsReducer,
});

let store = createStore(reducers);

export default store;
