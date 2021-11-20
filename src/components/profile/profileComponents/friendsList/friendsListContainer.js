import React from "react";
import FriendsList from "./friendsList";


const FriendsListContainer = (props) => {


    return (
        <FriendsList state={props.state.friendsList}/>
    );
}

export default FriendsListContainer;