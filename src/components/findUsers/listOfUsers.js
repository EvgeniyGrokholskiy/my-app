import React from "react";
import UserCard from "./userCard";

const ListOfUsers = (props) => {


    let usersToRender = props.findUsersPage.findUsers.map((user)=>{
        return (
            <UserCard user={user} toFollow={props.toFollow} toUnfollow={props.toUnfollow} />
        )
    })


    return (
        <div>
            {usersToRender}
        </div>
    )
}

export default ListOfUsers;