import {addPost} from "../../../../redux/profileReducer";
import NewPost from "./new_post";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const NewPostContainer = connect(mapStateToProps, {addPost})(NewPost);

export default NewPostContainer;