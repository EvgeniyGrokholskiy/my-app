import React from "react";
import PostOnWall from "./wallComponents/postOnWall/postOnWall";
import Wall from "./wall";
import {connect} from "react-redux";

// const WallContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 value => {
//
//                     let postsToRender = value.getState().profile.wallMessageArray.map(post => {
//
//                         return <PostOnWall key={post.id} message={post.message} likeCount={post.likeCount} newMessage={post.newMessage}/>
//                     });
//
//                     return(
//
//                       <Wall children={postsToRender}/>
//
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// }




const mapStateToProps = (state) => {

    let postsToRender = state.profile.wallMessageArray.map(post => {

        return <PostOnWall key={post.id} message={post.message} likeCount={post.likeCount} newMessage={post.newMessage}/>
    });

    return {
        children: postsToRender
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);

export default WallContainer;