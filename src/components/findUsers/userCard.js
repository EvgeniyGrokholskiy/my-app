import React from "react";
import style from "./userCard.module.css";


const UserCard = (props) => {

    const toUnfollow = () => {
        props.toUnfollow(props.user.id)
    };

    const toFollow = () => {
        props.toFollow(props.user.id)
    };

    return (

        <div className={style.wrapper}>
            <div className={style.avatar_container}>
                <img className={style.photo} src={props.user.photos.small} alt=""/>
                {("props.user.followed")? <button onClick={toUnfollow} className={style.button}>Unfollow</button>: <button onClick={toFollow} className={style.button}>Follow</button>}
            </div>
            <div className={style.user_description}>
                <div className={style.left_description}>
                    <h3>{props.user.name}</h3>
                    <p>{"props.user.status"}</p>
                </div>
                <div className={style.right_description}>
                    <p>{"props.user.location.country"},</p>
                    <p>{"props.user.location.city"}</p>
                </div>
            </div>
        </div>

    )
}

export default UserCard;