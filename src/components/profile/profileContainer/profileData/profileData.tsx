import React, {useState} from "react"
import style from "./profileData.module.css"
import Loading from "../../../commons/loading/loading"
import {IProfileDataProps} from "../../../../types/types"
import profileData_top_image from "./img/profile_top_images.jpg"
import ProfileDataHolder from "./profileDataHolder/profileDataHolder"
import ProfileImageBlock from "./profileImageBlock/profileImageBlock"
import ProfileSetDataForm from "./profileSetDataForm/profileSetDataForm"


const ProfileData: React.FC<IProfileDataProps> = React.memo(({
                                                                 auth,
                                                                 state,
                                                                 match,
                                                                 savePhoto,
                                                                 setUserProfileData
                                                             }) => {

    const [editMode, setEditMode] = useState(false)

    if (!state.profile) {

        return (

            <div className={style.wrapper}>
                <img src={profileData_top_image} alt="nice building" height={180} width={850}/>
                <div className={style.card}>
                    <Loading/>
                </div>
            </div>
        )
    }

    return (

        <div className={style.wrapper}>
            <img src={profileData_top_image} alt="profile owner" height={180} width={850}/>
            <div className={style.card}>
                <ProfileImageBlock state={state}
                                   match={match}
                                   auth={auth}
                                   savePhoto={savePhoto}/>
                <div className={style.profileDataWrapper}>
                    {
                        editMode ? <ProfileSetDataForm error={state.error}
                                                       errorMessage={state.sendErrorMessage}
                                                       setEditMode={setEditMode}
                                                       state={state}
                                                       setUserProfileData={setUserProfileData}/>
                            : <ProfileDataHolder state={state}
                                                 setEditMode={setEditMode}
                                                 match={match}
                                                 auth={auth}/>
                    }
                </div>
            </div>
        </div>
    )
}, function areEqual(prevProps: IProfileDataProps, nextProps: IProfileDataProps) {
    return prevProps.state.profile === nextProps.state.profile
})

export default ProfileData