import React from "react";
import style from "./userCard.module.css";
import photo from "./img/userUnknown.png";


const UserCard = (props) => {

    const toUnfollow = () => {
        props.toUnfollow(props.user.id)
    };

    const toFollow = () => {
        props.toFollow(props.user.id)
    };

    return (
        props.findUsers.map((user) => {
            return (

        <div className={style.wrapper}>
            <div className={style.avatar_container}>
                <img className={style.photo} src={user.photos.small !== null? user.photos.small: photo} alt=""/>
                {(user.followed)? <button onClick={toUnfollow} className={style.button}>Unfollow</button>: <button onClick={toFollow} className={style.button}>Follow</button>}
            </div>
            <div className={style.user_description}>
                <div className={style.left_description}>
                    <h3>{user.name}</h3>
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
    ))
}

export default UserCard;