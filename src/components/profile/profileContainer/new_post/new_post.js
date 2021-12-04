import React from "react";
import style from "./new_post.module.css";
import {ReactComponent as SendIcon} from "./img/send_icon.svg";
import {Field, Form} from "react-final-form";

const NewPost = (props) => {


    const addPost = (newMessage) => {
        if(newMessage.message) props.addPost(newMessage.newMessage);
    }

    return (
        <div>
            <NewMessageForm addPost={addPost} />
        </div>
    )
};

const NewMessageForm = (props) => {
    return (
        <Form
            onSubmit={(data) => {
                props.addPost(data)
            }}
            validate={(data) => {
                console.log(data)
            }}
            render={({handleSubmit}) => (
                <form className={style.wrapper} onSubmit={handleSubmit}>
                    <Field name="newMessage">
                        {({input, meta}) => (
                            <>
                                <p className={style.header}>NEW POST</p>
                                <textarea className={style.textArea} {...input} placeholder={"What’s on your mind?"}/>
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                                <button type={"submit"} className={style.button}><SendIcon className={style.svg}/></button>
                            </>
                        )}
                    </Field>

                </form>
            )}
        />
    )
}


export default NewPost;