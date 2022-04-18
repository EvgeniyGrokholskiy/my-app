import React, {useEffect} from "react"
import style from "./friendsList.module.css"
import FriendCard from "./friendCard/friendCard"
import {getFriendsAPI} from "../../../../api/api"
import {IFriendsListProps} from "../../../../types/types"
import {IFriendsArrayItem} from "../../../../redux/friendsListReducer"


const FriendsList: React.FC<IFriendsListProps> = ({
                                                      friends,
                                                      setFriendInList,
                                                      setIsRefresh,
                                                      isRefresh,
                                                      viewAll,
                                                      setViewAll
                                                  }) => {

    const friendsListToRender = friends.map((friend: IFriendsArrayItem) => {
        return <FriendCard key={friend.id} name={friend.name} photos={friend.photos} viewAll={viewAll}/>
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
        <div className={`${viewAll && style.container_width} ${style.container}`}>
            <div className={`${viewAll && style.header_width} ${style.header}`}>
                <span className={style.headerText}>FRIENDS</span>
                <span className={style.headerLink} onClick={setViewAll}>VIEW ALL</span>
            </div>
            <div className={`${viewAll && style.friendsList_width} ${style.friendsList}`}>
                {friendsListToRender}
            </div>
        </div>
    )
}

export default FriendsList