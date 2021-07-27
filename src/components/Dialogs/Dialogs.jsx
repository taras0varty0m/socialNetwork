import s from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  const addMessage = () => {
    props.addMessage();
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{props.dialogsElements}</div>
      <div className={s.messages}>{props.messagesElements}</div>
      <div className={s.form}>
        <h3>New message</h3>
        <textarea
          name="text"
          rows="3"
          value={props.dialogsPage.newMessageText}
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
