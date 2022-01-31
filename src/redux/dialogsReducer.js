const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Sasha",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg",
    },
    {
      id: 2,
      name: "Misha",
      avatar:
        "https://i.pinimg.com/originals/63/92/22/6392229375de53fb4bff04e9e3e6f324.png",
    },
    {
      id: 3,
      name: "Kolya",
      avatar:
        "https://pbs.twimg.com/profile_images/1373246348846379014/ddQbeETU.jpg",
    },
    {
      id: 4,
      name: "Vasya",
      avatar:
        "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288",
    },
    {
      id: 5,
      name: "Anton",
      avatar: "https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg",
    },
    {
      id: 6,
      name: "Igor",
      avatar:
        "https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png",
    },
  ],
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "hey" },
    { id: 4, message: "How are u?" },
    { id: 5, message: "W r u doing?" },
    { id: 6, message: "bye" },
  ],
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: state.messagesData.length + 1,
        message: action.message,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    }
    default:
      return state;
  }
};

export const addMessage = (message) => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;
