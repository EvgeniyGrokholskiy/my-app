import React from "react"
import style from "./wall.module.css"
import {IWallProps} from "../../../../types/types"
import {IWallMessage} from "../../../../redux/profileReducer"
import PostOnWall from "./wallComponents/postOnWall/postOnWall"


const Wall: React.FC<IWallProps> = React.memo(({wallMessageArray}) => {

    let postsToRender = wallMessageArray.map((post: IWallMessage) => {

        return <PostOnWall key={post.id} message={post.message} likeCount={post.likeCount}/>
    });

    return (
        <div className={style.wrapper}>
            {
                postsToRender
            }
        </div>
    );
}, function areEqual(prevProps: IWallProps, nextProps: IWallProps) {
    return prevProps.wallMessageArray === nextProps.wallMessageArray
})

export default Wall;