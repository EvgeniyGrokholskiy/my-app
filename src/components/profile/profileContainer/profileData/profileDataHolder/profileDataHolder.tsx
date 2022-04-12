import React from "react"
import style from "../profileData.module.css"
import {IProfileDataHolderProps} from "../../../../../types/types"


const ProfileDataHolder: React.FC<IProfileDataHolderProps> = ({state,
                                                                  setEditMode,
                                                                  match,
                                                                  auth}) => {


    return (
        <>
            <p className={`${style.data}, ${style.fullName}`}>
                {state.profile.fullName}
            </p>
            <p className={style.data}>
                About me: <span className={style.fieldData}>{state.profile.aboutMe}</span>
            </p>
            <p className={style.data}>
                LookingForAJob: <span
                className={style.fieldData}>{state.profile.lookingForAJob ? "Yes" : "Have a job."}</span>
            </p>
            <p className={style.data}>
                Job description: <span
                className={style.fieldData}>{state.profile.lookingForAJobDescription}</span>
            </p>
            <p className={style.data}> Contacts:
                {
                    state.profile.contacts.facebook &&
                    <span className={`${style.data} , ${style.contacts}`}> Facebook:
                            <a target={"_blank"}
                               rel="noreferrer"
                               href={state.profile.contacts.facebook}>{state.profile.contacts.facebook};
                            </a>
                        </span>
                }

                {
                    state.profile.contacts.github &&
                    <span className={`${style.data} , ${style.contacts}`}> GitHub:
                            <a target={"_blank"} rel="noreferrer"
                               href={state.profile.contacts.github}>{state.profile.contacts.github};
                            </a>
                        </span>
                }

                {
                    state.profile.contacts.instagram &&
                    <span className={`${style.data} , ${style.contacts}`}> Instagram:
                            <a target={"_blank"} rel="noreferrer"
                               href={state.profile.contacts.instagram}>{state.profile.contacts.instagram};
                            </a>
                        </span>
                }

                {
                    state.profile.contacts.mainLink &&
                    <span className={`${style.data} , ${style.contacts}`}> MainLink:
                            <a target={"_blank"} rel="noreferrer"
                               href={state.profile.contacts.mainLink}>{state.profile.contacts.mainLink};
                            </a>
                        </span>
                }

                {
                    state.profile.contacts.twitter &&
                    <span className={`${style.data} , ${style.contacts}`}> Twitter:
                            <a target={"_blank"} rel="noreferrer"
                               href={state.profile.contacts.twitter}>{state.profile.contacts.twitter};
                            </a>
                        </span>
                }

                {
                    state.profile.contacts.vk &&
                    <span className={`${style.data} , ${style.contacts}`}> Vk:
                            <a target={"_blank"} rel="noreferrer"
                               href={state.profile.contacts.vk}>{state.profile.contacts.vk};
                            </a>
                        </span>
                }

                {
                    state.profile.contacts.website &&
                    <span className={`${style.data} , ${style.contacts}`}> Website:
                            <a target={"_blank"} rel="noreferrer"
                               href={state.profile.contacts.website}>{state.profile.contacts.website};
                            </a>
                        </span>
                }

            </p>
            {
                auth.id && !match &&
                <button className={style.button} onClick={() => {
                    setEditMode(true)
                }}>Edit profile</button>
            }
        </>
    )
}

export default ProfileDataHolder;
