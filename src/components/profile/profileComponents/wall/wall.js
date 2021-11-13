import React from "react";
import style from './wall.module.css';
import {PostOnWall} from "./wallComponents/postOnWall/postOnWall";

export const Wall = (props) => {

    let postsToRender = props.state.map(post => <PostOnWall key={post.id} message = {post.message} likeCount = {post.likeCount}/>);

    return (
        <div className={style.wrapper}>

            {postsToRender}

        </div>
    );
}