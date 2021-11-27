import React from "react";
import style from "./findUsers.module.css";
import FriendsListContainer from "../profile/profileComponents/friendsList/friendsListContainer";
import FindUsersContainer from "./findUsersContainer";

const FindUsers = (props)=> {
    return (
        <div className={style.container}>
            <div className={style.left_container}>
                <FindUsersContainer />
            </div>
            <div className={style.right_container}>
                <FriendsListContainer />
            </div>
        </div>

    )
}

export default FindUsers