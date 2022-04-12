import {connect} from "react-redux"
import {addPost} from "../../../../redux/profileReducer"
import NewMessage from "./newMessageForm/newMessage"


const NewPostContainer = connect(null, {addPost})(NewMessage)

export default NewPostContainer