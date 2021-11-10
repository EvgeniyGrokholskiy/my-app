import React from "react";
import profile_top_images from "./img/profile_top_images.jpg";
import photo from "./img/photo.png";
import style from'./profile.module.css';

export const Profile = (props) => {
    return (
          <div className={style.profile__wrapper}>
              <img src={profile_top_images} alt="" height={254} width={1200}/>
              <div className={style.profile__card}>
                  <img className={style.profile__image} src={photo} alt=""/>
                  <p className={`${style.profile__data} ${style.profile__data_name}`}>
                      {"Evgeniy G"}
                  </p>
                  <p className={`${style.profile__data} ${style.profile__data_birth}`}>
                      Date of birth: {"21.05.1979"}
                  </p>
                  <p className={`${style.profile__data} ${style.profile__data_city}`}>
                      City: {"Chelyabinsk"}
                  </p>
                  <p className={`${style.profile__data} ${style.profile__data_education}`}>
                      Education: {"college"}
                  </p>
                  <p className={`${style.profile__data} ${style.profile__data_site}`}>
                      Web site: {"www"}
                  </p>
              </div>
          </div>
    );
}