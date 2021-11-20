import React from "react";
import {addMessageOnWallActionCreator, changeNewMessageOnWallActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./new_post";

const NewPostContainer = (props) => {

    const addPost = (message) => {

        props.dispatch(addMessageOnWallActionCreator(message));
    }

    const setNewMessage = (message) => {

        props.dispatch(changeNewMessageOnWallActionCreator(message));
    }

    return (
        <NewPost addPost={addPost} setNewMessage={setNewMessage} state={props.state}  />
    )
};

export default NewPostContainer;