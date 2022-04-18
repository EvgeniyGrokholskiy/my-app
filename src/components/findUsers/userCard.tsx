import React from "react"
import {NavLink} from "react-router-dom"
import style from "./userCard.module.css"
import photo from "./img/userUnknown.png"
import Pagination from "./pagination/pagination"
import {IUserCardProps, UsersArrayItemType} from "../../types/types"


const UserCard: React.FC<IUserCardProps> = React.memo(({
                                                           onPageChanged,
                                                           totalUsers,
                                                           usersOnPage,
                                                           currentPage,
                                                           findUsers,
                                                           setFollow,
                                                           setUnfollow,
                                                           isFollowingInProgress
                                                       }) => {

    return (

        <div className={style.cardContainer}>

            <Pagination onPageChanged={onPageChanged}
                        totalUsers={totalUsers}
                        usersOnPage={usersOnPage}
                        currentPage={currentPage}
                        pageSize={10}
            />

            {
                findUsers.map((user: UsersArrayItemType) => {

                    const toUnfollow = () => {
                        setUnfollow(user.id, false)
                    }

                    const toFollow = () => {
                        setFollow(user.id, true)
                    }

                    return (

                        <div key={user.id} className={style.wrapper}>

                            <div className={style.avatar_container}>
                                <img className={style.photo}
                                     src={user.photos.small !== null ? user.photos.small : photo} alt=""/>
                                {(user.followed) ?
                                    <button disabled={isFollowingInProgress.some((id: number) => id === user.id)}
                                            onClick={toUnfollow} className={style.button}>Unfollow</button> :
                                    <button disabled={isFollowingInProgress.some((id: number) => id === user.id)}
                                            onClick={toFollow} className={style.button}>Follow</button>}
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
}, function isEqual(prevProps: IUserCardProps, nextProps: IUserCardProps) {
    return prevProps === nextProps;
})

export default UserCard;