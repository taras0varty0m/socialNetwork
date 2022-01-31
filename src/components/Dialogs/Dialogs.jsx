import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { AddMessageForm } from "./AddMessageForm";
const Dialogs = (props) => {
  const addMessage = ({ message }) => {
    props.addMessage(message);
  };
  let dialogsElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} ava={d.avatar} />
  ));
  let messagesElements = props.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.form}>
        <AddMessageForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
