import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      ava={dialog.avatar}
      key={dialog.id}
    />
  ));
  let messagesElements = props.messagesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.form}>
        <h3>New message</h3>
        <textarea
          name="text"
          rows="3"
          value={props.newMessageText}
          onChange={onMessageChange}
          placeholder="Введите сообщение"
        />
        <br />
        <button onClick={addMessage} className={s.submit}>
          Add message
        </button>
      </div>
    </div>
  );
};
export default Dialogs;
