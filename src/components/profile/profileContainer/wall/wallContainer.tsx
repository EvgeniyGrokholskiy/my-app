import Wall from "./wall"
import {connect} from "react-redux"
import {AppStateType} from "../../../../redux/reduxStore"
import {setLikeToMessage} from "../../../../redux/profileReducer"
import {getWallMessageArrayState} from "../../../../redux/selectors"

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    wallMessageArray: getWallMessageArrayState(state)
})

const mapDispatchToProps = {
    setLikeToMessage
}


const WallContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Wall)

export default WallContainer