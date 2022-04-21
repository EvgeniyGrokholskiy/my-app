import {connect} from "react-redux"
import NewMessage from "./newMessageForm/newMessage"
import {addPost} from "../../../../redux/profileReducer"
import {AppStateType} from "../../../../redux/reduxStore"

type TMapDispatchToProps = typeof mapDispatchToProps

const mapDispatchToProps = {
    addPost
}

const NewPostContainer = connect<null, TMapDispatchToProps, any, AppStateType>(null, mapDispatchToProps)(NewMessage)

export default NewPostContainer