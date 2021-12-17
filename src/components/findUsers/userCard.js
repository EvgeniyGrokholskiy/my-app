import React from "react";
import style from "./userCard.module.css";
import photo from "./img/userUnknown.png";
import {NavLink} from "react-router-dom";
import Pagination from "./pagination/pagination";


const UserCard = (props) => {

    return (

        <div className={style.cardContainer}>

            <Pagination onPageChanged={props.onPageChanged}
                        totalUsers={props.totalUsers}
                        usersOnPage={props.usersOnPage}
                        currentPage={props.currentPage}
                        pageSize={10}
            />

            {
                props.findUsers.map((user) => {

                    const toUnfollow = () => {
                        props.setUnfollow(user.id, false);
                    }

                    const toFollow = () => {
                        props.setFollow(user.id, true);
                    }

                    return (

                        <div key={user.id} className={style.wrapper}>

                            <div className={style.avatar_container}>
                                <img className={style.photo}
                                     src={user.photos.small !== null ? user.photos.small : photo} alt=""/>
                                {(user.followed) ?
                                    <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={toUnfollow} className={style.button} >Unfollow</button> :
                                    <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={toFollow} className={style.button}>Follow</button>}
                                <NavLink to={`/profile/${user.id}`} className={style.linkToProfile}>Open
                                    Profile</NavLink>
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
                })
            }
        </div>
    )
}

export default UserCard;