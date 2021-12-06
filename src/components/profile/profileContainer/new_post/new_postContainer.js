import {addPost} from "../../../../redux/profileReducer";
import NewPost from "./new_post";
import {connect} from "react-redux";
import {getProfileState} from "../../../../redux/selectors";


const mapStateToProps = (state) => {
    return {
        profile: getProfileState(state)
    }
}

const NewPostContainer = connect(mapStateToProps, {addPost})(NewPost);

export default NewPostContainer;