import {addMessageOnWallActionCreator, changeNewMessageOnWallActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./new_post";
import {connect} from "react-redux";

// const NewPostContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 value => {
//
//                     const addPost = (message) => {
//
//                         value.dispatch(addMessageOnWallActionCreator(message));
//                     }
//
//                     const setNewMessage = (message) => {
//
//                         value.dispatch(changeNewMessageOnWallActionCreator(message));
//                     }
//
//                     return(
//                         <NewPost addPost={addPost} setNewMessage={setNewMessage} state={value.getState()}  />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// };

const mapStateToProps = (state) => {
    return {
        state: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            dispatch(addMessageOnWallActionCreator(message));
        },

        setNewMessage: (message) => {
            dispatch(changeNewMessageOnWallActionCreator(message));
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;