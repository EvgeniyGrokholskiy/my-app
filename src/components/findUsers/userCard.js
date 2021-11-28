import React from "react";
import style from "./userCard.module.css";
import photo from "./img/userUnknown.png";
import {NavLink} from "react-router-dom";
import {followUnfollowAPI} from "../../api/api";


const UserCard = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.usersOnPage);
    let pagesArray = [];

    for (let i = 1; i <= (pagesCount >= 20 ? 20 : pagesCount); i++) {
        pagesArray.push(i);
    }

    return (

        <div className={style.cardContainer}>

            <div className={style.pageButtonsContainer}>
                {

                    pagesArray.map((page) => {

                        return (
                            <button key={page} onClick={() => {
                                props.onPageChanged(page)
                            }}
                                    className={page === props.currentPage ? `${style.pageButton} ${style.current}` : style.pageButton}>{page}
                            </button>
                        )
                    })
                }
            </div>

            {
                props.findUsers.map((user) => {

                    const toUnfollow = () => {

                        followUnfollowAPI.unFollow(user.id).then((data) => {

                            if (data.resultCode === 0) {
                                props.toUnfollow(user.id)
                            }

                        })
                            .catch((error) => {
                                console.log(error)
                            })
                    };

                    const toFollow = () => {

                        followUnfollowAPI.follow(user.id).then((data) => {

                            if (data.resultCode === 0) {
                                props.toFollow(user.id)
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            })
                    };

                    return (

                        <div key={user.id} className={style.wrapper}>

                            <div className={style.avatar_container}>
                                <img className={style.photo}
                                     src={user.photos.small !== null ? user.photos.small : photo} alt=""/>
                                {(user.followed) ?
                                    <button onClick={toUnfollow} className={style.button}>Unfollow</button> :
                                    <button onClick={toFollow} className={style.button}>Follow</button>}
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
            <button className={style.buttonSM}>Show more</button>
        </div>
    )
}

export default UserCard;