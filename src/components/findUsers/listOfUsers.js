import React from "react";
import UserCard from "./userCard";
import style from "./listOfUsers.module.css"
import axios from "axios";

const ListOfUsers = (props) => {
debugger
    const getUsers = () => {
        if (props.findUsers.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users/?count-5")
                .then((response) => {
                    debugger
                        console.log(response.data.items);
                        props.setUsers(response.data.items);
                    }
                )
        }
    }

    let usersToRender = props.findUsers.map((user) => {
        return (
            <UserCard className={style.userCard} key={user.id} user={user} toFollow={props.toFollow}
                      toUnfollow={props.toUnfollow} getUsers={getUsers}/>
        )
    })


    return (
        <div className={style.cardContainer}>
            {usersToRender}
            <button onClick={getUsers} className={style.button}>Show more</button>
        </div>
    )
}

export default ListOfUsers;