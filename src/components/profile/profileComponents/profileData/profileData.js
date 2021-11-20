import React from "react";
import style from "./profileData.module.css";
import photo from "./img/photo.png";
import profileData_top_image from "./img/profile_top_images.jpg";


const ProfileData = (props) => {

    return (
        <div className={style.wrapper}>
            <img src={profileData_top_image} alt="" height={180} width={850}/>
            <div className={style.card}>
                <img className={style.image} src={photo} alt=""/>
                <p className={`${style.data} ${style.data_name}`}>
                    {`${props.state[0].firstName} ${props.state[0].secondName}`}
                </p>
                <p className={`${style.data} ${style.data_birth}`}>
                    Date of birth: {props.state[0].birthDate}
                </p>
                <p className={`${style.data} ${style.data_city}`}>
                    City: {props.state[0].city}
                </p>
                <p className={`${style.data} ${style.data_education}`}>
                    Education: {props.state[0].education}
                </p>
                <p className={`${style.data} ${style.data_site}`}>
                    Web site: {props.state[0].webSite}
                </p>
            </div>
        </div>
    );
};

export default ProfileData;