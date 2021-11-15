import React from "react";
import style from './wall.module.css';
import {PostOnWall} from "./wallComponents/postOnWall/postOnWall";

export const Wall = (props) => {
    let postsToRender = props.state.wallMessageArray.map(post => {
        return <PostOnWall key={post.id} message={post.message} likeCount={post.likeCount} newMessage={post.newMessage}/>
    });

    return (
        <div className={style.wrapper}>

            {postsToRender}

        </div>
    );
}