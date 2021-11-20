import React from "react";
import FriendsList from "./friendsList";
import StoreContext from "../../../../StoreContext";


const FriendsListContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                value => {
                    return(
                        <FriendsList state={value.getState().friendsList}/>
                    )
                }
            }
        </StoreContext.Consumer>

    );
}

export default FriendsListContainer;