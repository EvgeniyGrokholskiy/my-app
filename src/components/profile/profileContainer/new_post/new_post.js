import React from "react";
import style from "./new_post.module.css";
import {ReactComponent as SendIcon} from "./img/send_icon.svg";
import {Field, Form} from "react-final-form";
import {validators} from "../../../utils/validators";

const NewPost = (props) => {


    const addPost = (data) => {
        if (data.newMessage) props.addPost(data.newMessage);
    }

    return (
        <div>
            <NewMessageForm addPost={addPost}/>
        </div>
    )
};

const NewMessageForm = (props) => {

    const maxLength300 = validators.maxLengthValidatorCreator(300);

    return (
        <Form
            onSubmit={(data) => {
                props.addPost(data)
            }}
            validate={(data) => {

            }}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newMessage" validate={maxLength300}>
                        {({input, meta}) => (
                            <>
                                <div className={style.wrapper}>
                                    <p className={style.header}>NEW POST</p>
                                    <textarea className={style.textArea} {...input}
                                              placeholder={"What’s on your mind?"}/>

                                    <button type={"submit"} className={style.button}><SendIcon className={style.svg}/>
                                    </button>
                                    {meta.touched && meta.error && <span className={style.errorMessage}>{meta.error}</span>}
                                </div>

                            </>
                        )}
                    </Field>


                </form>
            )}
        />
    )
}


export default NewPost;