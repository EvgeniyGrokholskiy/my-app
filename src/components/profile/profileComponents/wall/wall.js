import React from "react";
import style from './wall.module.css';
import {PostOnWall} from "./wallComponents/postOnWall/postOnWall";

export const Wall = (props) => {

    const counter = (() => {
        let counter = 1;
        return ()=> {
            return counter++
        }
    })();

    let postsToRender = props.wallMessageArray.map(post => <PostOnWall key={counter()} message = {post.message} likeCount = {post.likeCount}/>);

    return (
        <div className={style.wrapper}>

            {postsToRender}

        </div>
    );
}