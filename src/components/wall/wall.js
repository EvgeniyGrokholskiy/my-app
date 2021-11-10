import React from "react";
import style from './wall.module.css';
import {PostOnWall} from "../postOnWall/postOnWall";

export const Wall = (props) => {
    return (
        <div className={style.posts__wrapper}>
            <PostOnWall message = "How’s your day going, guys?" likeCount = "10"/>
            <PostOnWall message = "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?" likeCount = "20"/>
        </div>
    );
}