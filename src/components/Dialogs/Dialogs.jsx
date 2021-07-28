import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  const addMessage = () => {
    props.addMessage();
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} ava={d.avatar} />
  ));
  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
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
