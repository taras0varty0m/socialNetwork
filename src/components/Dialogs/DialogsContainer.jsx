import { addMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const DialogsContainer = (props) => <Dialogs {...props} />;

export default compose(
  connect(mapStateToProps, {
    addMessage,
    updateNewMessageText,
  }),
  withAuthRedirect
)(DialogsContainer);
