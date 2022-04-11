import {connect} from "react-redux"
import {addPost} from "../../../../redux/profileReducer"
import NewMessageForm from "./newMessageForm/newMessageForm"


const NewPostContainer = connect(null, {addPost})(NewMessageForm)

export default NewPostContainer