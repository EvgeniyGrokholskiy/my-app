import {addPost, changeNewMessageOnWall} from "../../../../redux/profileReducer";
import NewPost from "./new_post";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            dispatch(addMessageOnWallActionCreator(message));
        },

        setNewMessage: (message) => {
            dispatch(changeNewMessageOnWallActionCreator(message));
        }
    }
}*/

const NewPostContainer = connect(mapStateToProps, {addPost, changeNewMessageOnWall})(NewPost);

export default NewPostContainer;