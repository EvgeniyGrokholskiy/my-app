import React from "react";
import PostOnWall from "./wallComponents/postOnWall/postOnWall";
import Wall from "./wall";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    let postsToRender = state.profile.wallMessageArray.map(post => {

        return <PostOnWall key={post.id} message={post.message} likeCount={post.likeCount} newMessage={post.newMessage}/>
    });

    return {
        children: postsToRender
    }
};


const WallContainer = connect(mapStateToProps, null)(Wall);

export default WallContainer;