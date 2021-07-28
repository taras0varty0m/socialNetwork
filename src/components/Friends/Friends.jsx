import React from "react";
import StoreContext from "../../storeContext";
import s from "./Friends.module.css";
const Friends = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const friends = store
          .getState()
          .friendsPage.friendsData.map((friend) => (
            <div className={s.friend} key={friend.id}>
              <img src={friend.avatar} alt="avatar" className={s.avatar} />
              <div className={s.friendName}>{friend.name}</div>
            </div>
          ));
        return <>{friends}</>;
      }}
    </StoreContext.Consumer>
  );
};
export default Friends;
