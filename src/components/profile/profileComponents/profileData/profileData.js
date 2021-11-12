import React from "react";
import style from "./profileData.module.css";
import photo from "./img/photo.png";
import profileData_top_image from "./img/profile_top_images.jpg";


export const ProfileData = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={profileData_top_image} alt="" height={254} width={1200}/>
            <div className={style.card}>
                <img className={style.image} src={photo} alt=""/>
                <p className={`${style.data} ${style.data_name}`}>
                    {"Evgeniy G"}
                </p>
                <p className={`${style.data} ${style.data_birth}`}>
                    Date of birth: {"21.05.1979"}
                </p>
                <p className={`${style.data} ${style.data_city}`}>
                    City: {"Chelyabinsk"}
                </p>
                <p className={`${style.data} ${style.data_education}`}>
                    Education: {"college"}
                </p>
                <p className={`${style.data} ${style.data_site}`}>
                    Web site: {"www"}
                </p>
            </div>
        </div>  
    );
}