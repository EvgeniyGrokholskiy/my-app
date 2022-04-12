import React from "react"
import style from "./findUsers.module.css"
import FindUsersContainer from "./findUsersContainer"
import FriendsListContainer from "../profile/profileContainer/friendsList/friendsListContainer"


const FindUsers: React.FC = () => {

    return (
        <div className={style.container}>
            <div className={style.left_container}>
                <FindUsersContainer/>
            </div>
            <div className={style.right_container}>
                <FriendsListContainer/>
            </div>
        </div>
    )
}

export default FindUsers