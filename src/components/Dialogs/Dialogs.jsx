import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      ava={dialog.avatar}
      key={dialog.id}
    />
  ));
  let messegesElements = props.messegesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messegesElements}</div>
    </div>
  );
};
export default Dialogs;
