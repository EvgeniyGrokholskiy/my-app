import React, {createRef} from "react";
import style from "./new_post.module.css";
import {ReactComponent as SendIcon} from "./img/send_icon.svg";

export const NewPost = (props) => {

    let textAreaComponent = createRef();

    const addPost = () => {
        props.dispatch(
            {
            type:"ADD_MESSAGE_ON_WALL",
            message: textAreaComponent.current.value
            });
    }

    const setNewMessage = () => {
        props.dispatch(
            {
            type: "CHANGE_NEW_MESSAGE_ON_WALL",
            message:textAreaComponent.current.value
            });
    }

    return (
        <div className={style.wrapper}>
            <p className={style.header}>NEW POST</p>
            <textarea onChange={setNewMessage} ref={textAreaComponent} className={style.textArea} placeholder={"What’s on your mind?"} value={props.state.profile.newMessage}/>
            <button onClick={addPost} className={style.button}><SendIcon className={style.svg}/></button>
        </div>
    )
}