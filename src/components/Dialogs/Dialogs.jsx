import s from "./Dialogs.module.css";
import Messege from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messegesElements = props.messegesData.map((message) => (
    <Messege message={message.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messegesElements}</div>
    </div>
  );
};
export default Dialogs;
