import React, {createRef} from "react";
import style from "./new_post.module.css";
import {ReactComponent as SendIcon} from "./img/send_icon.svg";

export const NewPost = (props) => {

    let textAreaComponent = createRef();

    const addPost = () => {
        alert(textAreaComponent.current.value);
    }

    return (
        <div className={style.wrapper}>
            <p className={style.header}>NEW POST</p>
            <textarea ref={textAreaComponent} className={style.textArea} placeholder={"What’s on your mind?"}/>
            <button onClick={addPost} className={style.button}><SendIcon className={style.svg}/></button>
        </div>
    )
}