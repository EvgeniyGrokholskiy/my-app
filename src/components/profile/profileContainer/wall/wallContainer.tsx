import Wall from "./wall"
import {connect} from "react-redux"
import {AppStateType} from "../../../../redux/reduxStore"
import {getWallMessageArrayState} from "../../../../redux/selectors"

const mapStateToProps = (state: AppStateType) => ({
    wallMessageArray: getWallMessageArrayState(state)
})


const WallContainer = connect(mapStateToProps, null)(Wall)

export default WallContainer