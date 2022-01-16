import React, {useState} from "react";
import style from "./profileData.module.css";
import Loading from "../../../commons/loading/loading";
import profileData_top_image from "./img/profile_top_images.jpg";
import ProfileDataHolder from "./profileDataHolder/profileDataHolder";
import ProfileImageBlock from "./profileImageBlock/profileImageBlock";
import ProfileSetDataForm from "./profileSetDataForm/profileSetDataForm";


const ProfileData = React.memo((props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.state.profile) {

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
                <ProfileImageBlock state={props.state}
                                   match={props.match}
                                   auth={props.auth}
                                   savePhoto={props.savePhoto}/>
                <div className={style.profileDataWrapper}>
                    {
                        editMode ? <ProfileSetDataForm error={props.state.error}
                                                       errorMessage={props.state.sendErrorMessage}
                                                       setEditMode={setEditMode}
                                                       state={props.state}
                                                       setUserProfileData={props.setUserProfileData}/>
                                : <ProfileDataHolder state={props.state}
                                                     setEditMode={setEditMode}
                                                     match={props.match}
                                                     auth={props.auth}/>
                    }
                </div>
            </div>
        </div>
    )
},function areEqual(prevProps, nextProps) {
    return prevProps.state.profile === nextProps.state.profile;
})

export default ProfileData;