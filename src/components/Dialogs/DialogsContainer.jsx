import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let dialogsElements = store
          .getState()
          .dialogsPage.dialogsData.map((dialog) => (
            <DialogItem
              name={dialog.name}
              id={dialog.id}
              ava={dialog.avatar}
              key={dialog.id}
            />
          ));
        let messagesElements = store
          .getState()
          .dialogsPage.messagesData.map((message) => (
            <Message message={message.message} key={message.id} />
          ));
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            dialogsPage={store.getState().dialogsPage}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            dispatch={store.dispatch}
            dialogsElements={dialogsElements}
            messagesElements={messagesElements}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
