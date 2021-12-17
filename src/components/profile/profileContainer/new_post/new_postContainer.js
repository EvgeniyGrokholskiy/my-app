import {addPost} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import {getProfileState} from "../../../../redux/selectors";
import NewMessageForm from "./newMessageForm/newMessageForm";

const mapStateToProps = (state) => {
    return {
        profile: getProfileState(state)
    }
}

const NewPostContainer = connect(mapStateToProps, {addPost})(NewMessageForm);

export default NewPostContainer;