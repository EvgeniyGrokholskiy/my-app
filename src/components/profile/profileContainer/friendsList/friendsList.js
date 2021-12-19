import React from "react";
import style from "./friendsList.module.css";
import FriendCard from "./friendCard/friendCard";


const FriendsList = React.memo((props) => {

    const friendsListToRender = props.state.friends.map((friend) => {
        return <FriendCard key={friend.id} state={friend}/>;
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