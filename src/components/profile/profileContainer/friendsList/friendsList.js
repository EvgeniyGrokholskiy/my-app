import React from "react";
import style from "./friendsList.module.css";
import FriendCard from "./friendCard/friendCard";


const FriendsList = React.memo(({friends}) => {

    const friendsListToRender = friends.map((friend) => {
        return <FriendCard key={friend.id} name={friend.name} job={friend.job}/>;
    })

    return (
        <div className={style.container}>
            <div className={style.header}>
                <span className={style.headerText}>FRIENDS</span>
                <span className={style.headerLink}>VIEW ALL</span>
            </div>
            <div className={style.friendsList}>
                {friendsListToRender}
            </div>
        </div>
    );
})

export default FriendsList;