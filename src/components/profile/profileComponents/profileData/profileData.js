import React from "react";
import style from "./profileData.module.css";
import photo from "./img/photo.png";
import profileData_top_image from "./img/profile_top_images.jpg";


export const ProfileData = (props) => {
    return (
        <div className={style.profileData__wrapper}>
            <img src={profileData_top_image} alt="" height={254} width={1200}/>
            <div className={style.profileData__card}>
                <img className={style.profileData__image} src={photo} alt=""/>
                <p className={`${style.profileData__data} ${style.profileData__data_name}`}>
                    {"Evgeniy G"}
                </p>
                <p className={`${style.profileData__data} ${style.profileData__data_birth}`}>
                    Date of birth: {"21.05.1979"}
                </p>
                <p className={`${style.profileData__data} ${style.profileData__data_city}`}>
                    City: {"Chelyabinsk"}
                </p>
                <p className={`${style.profileData__data} ${style.profileData__data_education}`}>
                    Education: {"college"}
                </p>
                <p className={`${style.profileData__data} ${style.profileData__data_site}`}>
                    Web site: {"www"}
                </p>
            </div>
        </div>  
    );
}