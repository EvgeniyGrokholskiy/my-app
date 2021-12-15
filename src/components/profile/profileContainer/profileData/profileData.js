import React, {useState} from "react";
import style from "./profileData.module.css";
import photo from "./img/userUnknown.png";
import profileData_top_image from "./img/profile_top_images.jpg";
import Loading from "../../../commons/loading/loading";
import {Field, Form} from "react-final-form";


const ProfileData = (props) => {

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
                            <Form
                                initialValues={props.state.profile}
                                onSubmit={(data) => {
                                    setEditMode(false)
                                    props.setUserProfileData(data)
                                }}
                                validate={(values) => {

                                }}
                                render={({handleSubmit}) => (
                                    <form className={style.form} onSubmit={handleSubmit}>
                                        <div className={style.form__field}>
                                            <label className={style.label}>Full Name
                                                <Field name="fullName" component={"input"}/>
                                            </label>
                                            <label className={style.label}>About Me:
                                                <Field name="aboutMe" component={"textarea"} />
                                            </label>
                                            <label className={style.label}>lookingForAJob:
                                                <Field name="lookingForAJob" component={"input"} type={"checkBox"}/>
                                            </label>
                                            <label className={style.label}>lookingForAJobDescription:
                                                <Field name="lookingForAJobDescription" component={"textarea"} />
                                            </label>
                                            <p>Contacts:</p>
                                            <label className={style.label}>github:
                                                <Field name="contacts.github" component={"input"} />
                                            </label>
                                            <label className={style.label}>vk:
                                                <Field name="contacts.vk" component={"input"} />
                                            </label>
                                            <label className={style.label}>facebook:
                                                <Field name="contacts.facebook" component={"input"} />
                                            </label>
                                            <label className={style.label}>instagram:
                                                <Field name="contacts.instagram" component={"input"} />
                                            </label>
                                            <label className={style.label}>twitter:
                                                <Field name="contacts.twitter" component={"input"} />
                                            </label>
                                            <label className={style.label}>website:
                                                <Field name="contacts.website" component={"input"} />
                                            </label>
                                            <label className={style.label}>youtube:
                                                <Field name="contacts.youtube" component={"input"} />
                                            </label>
                                            <label className={style.label}>mainLink:
                                                <Field name="contacts.mainLink" component={"input"} />
                                            </label>
                                        </div>
                                        <button className={style.button} type="submit">Save</button>
                                    </form>
                                )}

                            />
                            : <>
                                <p className={style.data}>
                                    {props.state.profile.fullName}
                                </p>
                                <p className={style.data}>
                                    About me: {props.state.profile.aboutMe}
                                </p>
                                <p className={style.data}>
                                    LookingForAJob: {props.state.profile.lookingForAJob ? "Yes" : "Have a job."}
                                </p>
                                <p className={style.data}>
                                    Job description: {props.state.profile.lookingForAJobDescription}
                                </p>
                                <p className={style.data}> Contacts:
                                    <span className={`${style.data} , ${style.contacts}`}> Facebook: <a target={"_blank"} href={props.state.profile.contacts.facebook}>{props.state.profile.contacts.facebook};</a></span>
                                    <span className={`${style.data} , ${style.contacts}`}> GitHub: <a target={"_blank"} href={props.state.profile.contacts.github}>{props.state.profile.contacts.github};</a></span>
                                    <span className={`${style.data} , ${style.contacts}`}> Instagram: <a target={"_blank"} href={props.state.profile.contacts.instagram}>{props.state.profile.contacts.instagram};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> MainLink: <a target={"_blank"} href={props.state.profile.contacts.mainLink}>{props.state.profile.contacts.mainLink};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> Twitter: <a target={"_blank"} href={props.state.profile.contacts.twitter}>{props.state.profile.contacts.twitter};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> Vk: <a target={"_blank"} href={props.state.profile.contacts.vk}>{props.state.profile.contacts.vk};</a> </span>
                                    <span className={`${style.data} , ${style.contacts}`}> Website: <a target={"_blank"} href={props.state.profile.contacts.facebook}>{props.state.profile.contacts.facebook};</a> </span>
                                </p>
                                {
                                    props.auth.id && !props.match ?
                                        <button className={style.button} onClick={() => {setEditMode(true)}}>Edit profile</button> : <></>
                                }
                            </>
                    }


                </div>
            </div>
        </div>
    )
}

export default ProfileData;