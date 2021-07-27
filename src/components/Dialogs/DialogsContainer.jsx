import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let dialogsElements = state.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      ava={dialog.avatar}
      key={dialog.id}
    />
  ));
  let messagesElements = state.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <Dialogs
      dialogsPage={state.dialogsPage}
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      dispatch={props.store.dispatch}
      dialogsElements={dialogsElements}
      messagesElements={messagesElements}
    />
  );
};
export default DialogsContainer;
