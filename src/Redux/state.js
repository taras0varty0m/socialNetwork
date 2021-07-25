import {
  ADD_MESSAGE,
  ADD_POST,
  UPDATE_NEW_MESSAGE_TEXT,
  UPDATE_NEW_POST_TEXT,
} from "./ADD_POST";

let store = {
  _state: {
    friendsPage: {
      friendsData: [
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
    },
    profilePage: {
      postData: [
        { id: 1, message: "hi? how are you", likesCount: 12 },
        { id: 2, message: "It`s my first post", likesCount: 6 },
      ],
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
      newPostText: "",
    },
    messagesPage: {
      messagesData: [
        { id: 1, message: "hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "hey" },
        { id: 4, message: "How are u?" },
        { id: 5, message: "W r u doing?" },
        { id: 6, message: "bye" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case "ADD-POST":
        if (!this._state.profilePage.newPostText.length) {
          alert("post can't be empty");
          return;
        }
        let newPost = {
          id: this._state.profilePage.postData.length + 1,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case "UPDATE-NEW-POST-TEXT":
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case "ADD-MESSAGE":
        if (!this._state.messagesPage.newMessageText.length) {
          alert("message can't be empty");
          return;
        }
        let newMessage = {
          id: this._state.messagesPage.messagesData.length + 1,
          message: this._state.messagesPage.newMessageText,
        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = "";
        this._callSubscriber(this._state);
        break;
      case "UPDATE-NEW-MESSAGE-TEXT":
        this._state.messagesPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default store;
window.store = store;
