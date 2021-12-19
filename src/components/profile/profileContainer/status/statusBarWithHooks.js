import React, {useEffect, useState} from "react";
import style from "./statusBar.module.css";
import {ReactComponent as SendIcon} from "../new_post/img/send_icon.svg";

const StatusBarWithHooks = React.memo((props) => {

    let [editFlag, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.profileStatus);

    const editModeOn = () => {
        setEditMode(true);
    }

    const editModeOff = () => {
        setEditMode(false);
        props.setUserStatusThunkCreator(status);
    }

    useEffect(() => {
        setStatus(props.profileStatus)
    }, [props.profileStatus])

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
                <input className={style.textArea} autoFocus={true}
                       onChange={setProfileStatus} onBlur={setProfileStatus} value={status}/>
            }
            <button className={style.button} onClick={editModeOff}><SendIcon className={style.svg}/></button>
        </div>
    )
},function areEqual(prevProps, nextProps) {
    return prevProps.profileStatus === nextProps.profileStatus;
})

export default StatusBarWithHooks
