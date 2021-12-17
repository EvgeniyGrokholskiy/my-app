import React, {useState} from "react";
import style from "./profileData.module.css";
import photo from "./img/userUnknown.png";
import profileData_top_image from "./img/profile_top_images.jpg";
import Loading from "../../../commons/loading/loading";
import {Field, Form} from "react-final-form";
import ProfileForm from "./profileForm/profileForm";

const ProfileData = (props) => {

    const error = props.state.error;
    const errorMessage = props.state.sendErrorMessage;

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    if (!props.state.profile) {

        return (
            <div className={style.wrapper}>
                <img src={profileData_top_image} alt="" height={180} width={850}/>
                <div className={style.card}>
                    <Loading/>
                </div>
            </div>
        )
    }
    return (
        <div className={style.wrapper}>
            <img src={profileData_top_image} alt="" height={180} width={850}/>
            <div className={style.card}>
                <div className={style.imageWrapper}>
                    <img className={style.image}
                         src={props.state.profile.photos.large ? props.state.profile.photos.large : photo} alt=""/>
                    {
                        props.auth.id && !props.match ?
                            <input onChange={onMainPhotoSelected} type={"file"} className={style.setPhoto}/> : <></>
                    }
                </div>
                <div className={style.profileDataWrapper}>

                    {
                        editMode
                            ?
                            <ProfileForm error={error} errorMessage={errorMessage} setEditMode={setEditMode} state={props.state} setUserProfileData={props.setUserProfileData}/>
                            : <>
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
                                    <span className={`${style.data} , ${style.contacts}`}> Facebook: <a target={"_blank"} rel="noreferrer" href={props.state.profile.contacts.facebook}>{props.state.profile.contacts.facebook};</a></span>
                                    <span className={`${style.data} , ${style.contacts}`}> GitHub: <a target={"_blank"} rel="noreferrer" href={props.state.profile.contacts.github}>{props.state.profile.contacts.github};</a></span>
                                    <span className={`${style.data} , ${style.contacts}`}> Instagram: <a target={"_blank"} rel="noreferrer" href={props.state.profile.contacts.instagram}>{props.state.profile.contacts.instagram};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> MainLink: <a target={"_blank"} rel="noreferrer" href={props.state.profile.contacts.mainLink}>{props.state.profile.contacts.mainLink};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> Twitter: <a target={"_blank"} rel="noreferrer" href={props.state.profile.contacts.twitter}>{props.state.profile.contacts.twitter};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> Vk: <a target={"_blank"} rel="noreferrer" href={props.state.profile.contacts.vk}>{props.state.profile.contacts.vk};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> Website: <a target={"_blank"} rel="noreferrer" href={props.state.profile.contacts.facebook}>{props.state.profile.contacts.facebook};</a> </span>
                                </p>
                                {
                                    props.auth.id && !props.match ?
                                        <button className={style.button} onClick={() => {
                                            setEditMode(true)
                                        }}>Edit profile</button> : <></>
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileData;