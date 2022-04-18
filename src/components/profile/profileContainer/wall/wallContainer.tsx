import Wall from "./wall"
import {connect} from "react-redux"
import {AppStateType} from "../../../../redux/reduxStore"
import {setLikeToMessage} from "../../../../redux/profileReducer"
import {getWallMessageArrayState} from "../../../../redux/selectors"

const mapStateToProps = (state: AppStateType) => ({
    wallMessageArray: getWallMessageArrayState(state)
})

const mapDispatchToProps = {
    setLikeToMessage
}


const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)

export default WallContainer