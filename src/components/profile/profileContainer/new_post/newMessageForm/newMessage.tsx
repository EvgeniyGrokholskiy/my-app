import React, {ChangeEvent, useState} from "react"
import style from "./newMessageForm.module.css"
import {INewMessageFormProps} from "../../../../../types/types"
import {ReactComponent as SendIcon} from "../img/send_icon.svg"


const NewMessage: React.FC<INewMessageFormProps> = React.memo(({addPost}) => {

    const [message, setMessage] = useState("")

    const handleAddPost = () => {
        if (message) {
            addPost(message)
            setMessage("")
        }
    }

    return (

        <div className={style.wrapper}>
            <p className={style.header}>NEW POST</p>
            <textarea className={style.textArea}
                      placeholder={"What’s on your mind?"} value={message}
                      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                          setMessage(event.target.value)
                      }}/>

            <button onClick={handleAddPost} className={style.button}><SendIcon className={style.svg}/>
            </button>
        </div>
    )

}, function areEqual(prevProps: INewMessageFormProps, nextProps: INewMessageFormProps) {
    return prevProps === nextProps;
})

export default NewMessage;