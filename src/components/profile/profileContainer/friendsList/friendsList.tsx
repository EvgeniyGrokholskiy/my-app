import React, {useEffect} from "react"
import style from "./friendsList.module.css"
import FriendCard from "./friendCard/friendCard"
import {getFriendsAPI} from "../../../../api/api"
import {IFriendsListProps} from "../../../../types/types"
import {IFriendsArrayItem} from "../../../../redux/friendsListReducer"


const FriendsList: React.FC<IFriendsListProps> = ({friends, setFriendInList, setIsRefresh, isRefresh}) => {
    const friendsListToRender = friends.map((friend: IFriendsArrayItem) => {
        return <FriendCard key={friend.id} name={friend.name} photos={friend.photos}/>;
    })

    useEffect(() => {
        if (isRefresh) {
            getFriendsAPI.getFriends().then((response) => {
                    setFriendInList(response)
                    setIsRefresh(false)
                }
            )
        }
    }, [isRefresh, setFriendInList, setIsRefresh])

    useEffect(() => {
        getFriendsAPI.getFriends().then((response) => {
                setFriendInList(response)
            }
        )
    }, [setFriendInList])

    return (
        <div className={style.container}>
            <div className={style.header}>
                <span className={style.headerText}>FRIENDS</span>
                <span className={style.headerLink}>VIEW ALL</span>
            </div>
            <div className={style.friendsList}>
                {friendsListToRender}
            </div>
        </div>
    );
}

export default FriendsList;