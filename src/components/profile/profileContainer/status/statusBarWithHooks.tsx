import style from "./statusBar.module.css"
import React, {ChangeEvent, useEffect, useState} from "react"
import {IStatusBarWithHooksProps} from "../../../../types/types"
import {ReactComponent as SendIcon} from "../new_post/img/send_icon.svg"


const StatusBarWithHooks: React.FC<IStatusBarWithHooksProps> = React.memo(({
                                                                               profileStatus,
                                                                               setUserStatusThunkCreator,
                                                                           }) => {

    let [editFlag, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(profileStatus);

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)
        setUserStatusThunkCreator(status);
    }

    useEffect(() => {
        setStatus(profileStatus)
    }, [profileStatus])

    const setProfileStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value)
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
}, function areEqual(prevProps: IStatusBarWithHooksProps, nextProps: IStatusBarWithHooksProps) {
    return prevProps.profileStatus === nextProps.profileStatus
})

export default StatusBarWithHooks
