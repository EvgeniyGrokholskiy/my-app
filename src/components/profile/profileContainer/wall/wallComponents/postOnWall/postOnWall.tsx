import React from "react"
import avatar from "./img/photo.png"
import style from "./postOnWall.module.css"
import {IPostOnWall} from "../../../../../../types/types"
import {ReactComponent as LikeBtn} from "./img/thumbsUp.svg"


const PostOnWall: React.FC<IPostOnWall> = ({id, likeCount, message, setLikeToMessage}) => {

    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <img className={style.avatar} src={avatar} alt="" width={"80"} height={"80"}/>
                <p className={style.text}>{message}</p>
            </div>
            <LikeBtn name={id.toString()} className={style.likeBtn} onClick={() => {
                setLikeToMessage(id)
            }}/>
            < span className={style.likeCount}>{likeCount}</span>
        </div>
    )
}

export default PostOnWall;