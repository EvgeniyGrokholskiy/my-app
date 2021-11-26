import React from "react";
//import UserCard from "./userCard";
import style from "./listOfUsers.module.css"
import axios from "axios";
import photo from "./img/userUnknown.png";


export class ListOfUsers extends React.Component {

    onPageChanged = (page) => {
        this.props.showPage(page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=5&page=${page}`)
            .then((response) => {
                    console.log(response.data);
                    this.props.setUsers(response.data.items ,this.props.currentPage);
                }
            )
    }


    componentDidMount() {
        debugger
            axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=5&page=${this.props.currentPage}`)
                .then((response) => {
                        console.log(response.data.items);
                        this.props.setUsers(response.data.items ,this.props.currentPage);
                        this.props.setTotalUsersCount(response.data.totalCount)
                    }
                )
    }

    /*    usersToRender = this.props.findUsers.map((user) => {
            return (
                /!*<UserCard className={style.userCard} key={user.id} user={user} toFollow={this.props.toFollow}
                          toUnfollow={this.props.toUnfollow} getUsers={this.getUsers}/>*!/
                <div className={style.wrapper}>
                    <div className={style.avatar_container}>
                        <img className={style.photo} src={user.photos.small !== null? user.photos.small: photo} alt=""/>
                        {(user.followed)? <button onClick={this.toUnfollow} className={style.button}>Unfollow</button>: <button onClick={this.toFollow} className={style.button}>Follow</button>}
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
        })*/

    render() {

        let pagesCount = Math.ceil(this.props.totalUsers / this.props.usersOnPage);
        let pagesArray = [];

        for (let i = 1; i <= (pagesCount >= 20? 20: pagesCount); i++) {
            pagesArray.push(i);
        }

        return (
            <div className={style.cardContainer}>
                <div className={style.pageButtonsContainer}>
                    {

                        pagesArray.map((page) => {

                            return (
                                <button onClick={()=> {
                                    this.onPageChanged(page)
                                }}
                                    className={page === this.props.currentPage ? `${style.pageButton} ${style.current}` : style.pageButton}>{page}</button>
                            )
                        })
                    }
                </div>
                {/*{this.usersToRender}*/}
                {
                    this.props.findUsers.map((user) => {

                        const toUnfollow = () => {
                            this.props.toUnfollow(user.id)
                        };

                        const toFollow = () => {
                            this.props.toFollow(user.id)
                        };

                        return (
                            /*<UserCard className={style.userCard} key={user.id} user={user} toFollow={this.props.toFollow}
                                      toUnfollow={this.props.toUnfollow} getUsers={this.getUsers}/>*/
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
}

/*

const ListOfUsers = (props) => {

    const getUsers = () => {
        if (props.findUsers.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users/?count-5")
                .then((response) => {
                        console.log(response.data.items);
                        props.setUsers(response.data.items);
                    }
                )
        }
    }

    let usersToRender = props.findUsers.map((user) => {
        return (
            <UserCard className={style.userCard} key={user.id} user={user} toFollow={props.toFollow}
                      toUnfollow={props.toUnfollow} getUsers={getUsers}/>
        )
    })


    return (
        <div className={style.cardContainer}>
            {usersToRender}
            <button onClick={getUsers} className={style.button}>Show more</button>
        </div>
    )
}

*/
export default ListOfUsers;