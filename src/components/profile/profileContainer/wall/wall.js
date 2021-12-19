import React from "react";
import style from './wall.module.css';
import PostOnWall from "./wallComponents/postOnWall/postOnWall";

const Wall = React.memo((props) => {

    let postsToRender = props.wallMessageArray.map(post => {

        return <PostOnWall key={post.id} message={post.message} likeCount={post.likeCount} newMessage={post.newMessage}/>
    });

    return (
        <div className={style.wrapper}>

            {postsToRender}

        </div>
    );
},function areEqual(prevProps, nextProps) {
    return prevProps.wallMessageArray === nextProps.wallMessageArray;
});

export default Wall;