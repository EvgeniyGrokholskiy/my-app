import React, {createRef} from "react";
import style from "./new_post.module.css";
import {ReactComponent as SendIcon} from "./img/send_icon.svg";

const NewPost = (props) => {

    let textAreaComponent = createRef();

    const addPost = () => {
        const newMessage = textAreaComponent.current.value;

        props.addPost(newMessage);
    }

    const setNewMessage = (event) => {
        const newMessage = event.currentTarget.value;

        props.setNewMessage(newMessage);
    }

    return (
        <div className={style.wrapper}>
            <p className={style.header}>NEW POST</p>
            <textarea onChange={setNewMessage} ref={textAreaComponent} className={style.textArea}
                      placeholder={"What’s on your mind?"} value={props.state.newMessage}/>
            <button onClick={addPost} className={style.button}><SendIcon className={style.svg}/></button>
        </div>
    )
};

export default NewPost;