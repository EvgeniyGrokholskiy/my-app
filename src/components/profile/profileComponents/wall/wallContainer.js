import React from "react";
import PostOnWall from "./wallComponents/postOnWall/postOnWall";
import StoreContext from "../../../../StoreContext";
import Wall from "./wall";

export const WallContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                value => {

                    let postsToRender = value.getState().profile.wallMessageArray.map(post => {

                        return <PostOnWall key={post.id} message={post.message} likeCount={post.likeCount} newMessage={post.newMessage}/>
                    });

                    return(

                      <Wall children={postsToRender}/>

                    )
                }
            }
        </StoreContext.Consumer>

    );
}