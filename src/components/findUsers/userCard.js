import React from "react";
import style from "./userCard.module.css";
import photo from "./img/userUnknown.png";


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
                            <button onClick={() => {
                                props.onPageChanged(page)
                            }}
                                    className={page === props.currentPage ? `${style.pageButton} ${style.current}` : style.pageButton}>{page}</button>
                        )
                    })
                }
            </div>

            {
                props.findUsers.map((user) => {

                    const toUnfollow = () => {
                        props.toUnfollow(user.id)
                    };

                    const toFollow = () => {
                        props.toFollow(user.id)
                    };

                    return (

                        <div key={user.id} className={style.wrapper}>

                            <div className={style.avatar_container}>
                                <img className={style.photo}
                                     src={user.photos.small !== null ? user.photos.small : photo} alt=""/>
                                {(user.followed) ?
                                    <button onClick={toUnfollow} className={style.button}>Unfollow</button> :
                                    <button onClick={toFollow} className={style.button}>Follow</button>}
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