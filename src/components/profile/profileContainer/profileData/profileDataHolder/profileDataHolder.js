import React from "react";
import style from "../profileData.module.css";

const ProfileDataHolder = (props) => {

    return (
        <>
            <p className={`${style.data}, ${style.fullName}`}>
                {props.state.profile.fullName}
            </p>
            <p className={style.data}>
                About me: <span className={style.fieldData}>{props.state.profile.aboutMe}</span>
            </p>
            <p className={style.data}>
                LookingForAJob: <span
                className={style.fieldData}>{props.state.profile.lookingForAJob ? "Yes" : "Have a job."}</span>
            </p>
            <p className={style.data}>
                Job description: <span
                className={style.fieldData}>{props.state.profile.lookingForAJobDescription}</span>
            </p>
            <p className={style.data}> Contacts:
                <span className={`${style.data} , ${style.contacts}`}> Facebook: <a target={"_blank"} rel="noreferrer"
                                                                                    href={props.state.profile.contacts.facebook}>{props.state.profile.contacts.facebook};</a></span>
                <span className={`${style.data} , ${style.contacts}`}> GitHub: <a target={"_blank"} rel="noreferrer"
                                                                                  href={props.state.profile.contacts.github}>{props.state.profile.contacts.github};</a></span>
                <span className={`${style.data} , ${style.contacts}`}> Instagram: <a target={"_blank"} rel="noreferrer"
                                                                                     href={props.state.profile.contacts.instagram}>{props.state.profile.contacts.instagram};</a> </span>
                <span className={`${style.data} , ${style.contacts}`}> MainLink: <a target={"_blank"} rel="noreferrer"
                                                                                    href={props.state.profile.contacts.mainLink}>{props.state.profile.contacts.mainLink};</a> </span>
                <span className={`${style.data} , ${style.contacts}`}> Twitter: <a target={"_blank"} rel="noreferrer"
                                                                                   href={props.state.profile.contacts.twitter}>{props.state.profile.contacts.twitter};</a> </span>
                <span className={`${style.data} , ${style.contacts}`}> Vk: <a target={"_blank"} rel="noreferrer"
                                                                              href={props.state.profile.contacts.vk}>{props.state.profile.contacts.vk};</a> </span>
                <span className={`${style.data} , ${style.contacts}`}> Website: <a target={"_blank"} rel="noreferrer"
                                                                                   href={props.state.profile.contacts.facebook}>{props.state.profile.contacts.facebook};</a> </span>
            </p>
            {
                props.auth.id && !props.match ?
                    <button className={style.button} onClick={() => {
                        props.setEditMode(true)
                    }}>Edit profile</button> : <></>
            }
        </>
    )
}

export default ProfileDataHolder;
