import React, {useState} from "react";
import style from "./statusBar.module.css";
import {ReactComponent as SendIcon} from "../new_post/img/send_icon.svg";


const StatusBarWithHooks = (props) =>  {

    let [editFlag, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.profileStatus);

    const editModeOn = () => {
        setEditMode(true);
    }

    const editModeOff = () => {
        setEditMode(false);
        props.setUserStatusThunkCreator(status);
    }

    const setProfileStatus = (event) => {
        setStatus(event.currentTarget.value);
    }

        return (
            <div className={style.wrapper}>
                <p className={style.header}>STATUS</p>
                {
                    !editFlag &&
                    <span className={`${style.textArea} ${style.span}`}
                          onClick={editModeOn}>{props.profileStatus}</span>
                }
                {
                    editFlag &&
                    <input className={style.textArea} autoFocus={true} onBlur={editModeOff}
                           onChange={setProfileStatus} value={status}/>
                }
                <button className={style.button}><SendIcon className={style.svg}/></button>
            </div>
        )
}

export default StatusBarWithHooks
