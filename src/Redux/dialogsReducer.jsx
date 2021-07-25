import { ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from "./ADD_POST";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (!state.newMessageText.length) {
        alert("message can't be empty");
        return;
      }
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};
export default dialogsReducer;
