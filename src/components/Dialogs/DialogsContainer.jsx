import React from "react";
import Dialogs from "./Dialogs";
import { addMessage } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const DialogsContainer = (props) => <Dialogs {...props} />;

const mapStateToProps = (state) => ({
  dialogsData: state.dialogsPage.dialogsData,
  messagesData: state.dialogsPage.messagesData,
});

export default compose(
  connect(mapStateToProps, {
    addMessage,
  }),
  withAuthRedirect
)(DialogsContainer);
