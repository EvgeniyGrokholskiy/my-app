import React from "react";
import UserCard from "./userCard";

const ListOfUsers = (props) => {

/*    if (props.findUsers.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: "",
                followed: false,
                fullName: "Dmitry",
                status: "Hi",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoURL: "",
                followed: true,
                fullName: "Dmitry2",
                status: "Hi2",
                location: {city: "Minsk2", country: "Belarus"}
            },
            {
                id: 3,
                photoURL: "",
                followed: false,
                fullName: "Dmitry3",
                status: "Hi3",
                location: {city: "Minsk3", country: "Belarus"}
            },
            {
                id: 4,
                photoURL: "",
                followed: true,
                fullName: "Dmitry4",
                status: "Hi4",
                location: {city: "Minsk4", country: "Belarus"}
            },
            {
                id: 5,
                photoURL: "",
                followed: false,
                fullName: "Dmitry5",
                status: "Hi5",
                location: {city: "Minsk5", country: "Belarus"}
            },
        ])
    }*/

    let usersToRender = props.findUsers.map((user) => {
        return (
            <UserCard key={user.id} user={user} toFollow={props.toFollow} toUnfollow={props.toUnfollow}/>
        )
    })


    return (
        <div>
            {usersToRender}
        </div>
    )
}

export default ListOfUsers;