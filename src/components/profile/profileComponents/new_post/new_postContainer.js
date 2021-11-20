import React from "react";
import {addMessageOnWallActionCreator, changeNewMessageOnWallActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./new_post";
import StoreContext from "../../../../StoreContext";

const NewPostContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                value => {

                    const addPost = (message) => {

                        value.dispatch(addMessageOnWallActionCreator(message));
                    }

                    const setNewMessage = (message) => {

                        value.dispatch(changeNewMessageOnWallActionCreator(message));
                    }

                    return(
                        <NewPost addPost={addPost} setNewMessage={setNewMessage} state={value.getState()}  />
                    )
                }
            }
        </StoreContext.Consumer>

    )
};

export default NewPostContainer;