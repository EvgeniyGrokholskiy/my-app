import {connect} from "react-redux"
import NewMessage from "./newMessageForm/newMessage"
import {addPost} from "../../../../redux/profileReducer"


const NewPostContainer = connect(null, {addPost})(NewMessage)

export default NewPostContainer