import {addPost} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import NewMessageForm from "./newMessageForm/newMessageForm";

const mapStateToProps = (state) => {
    return {}
}

const NewPostContainer = connect(mapStateToProps, {addPost})(NewMessageForm);

export default NewPostContainer;