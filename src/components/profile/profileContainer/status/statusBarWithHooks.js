import style from "./statusBar.module.css";
import React, {useEffect, useState} from "react";
import {ReactComponent as SendIcon} from "../new_post/img/send_icon.svg";


const StatusBarWithHooks = React.memo(({profileStatus,setUserStatusThunkCreator,}) => {

    let [editFlag, setEditMode] = useState(false);
    let [status, setStatus] = useState(profileStatus);

    const editModeOn = () => {
        setEditMode(true);
    }

    const editModeOff = () => {
        setEditMode(false);
        setUserStatusThunkCreator(status);
    }

    useEffect(() => {
        setStatus(profileStatus)
    }, [profileStatus])

    const setProfileStatus = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div className={style.wrapper}>
            <p className={style.header}>STATUS</p>
            {
                !editFlag &&
                <span className={`${style.textArea} ${style.span}`}
                      onClick={editModeOn}>{profileStatus}</span>
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
