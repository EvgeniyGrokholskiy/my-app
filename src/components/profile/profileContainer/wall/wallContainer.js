import Wall from "./wall";
import {connect} from "react-redux";
import {getWallMessageArrayState} from "../../../../redux/selectors";


const mapStateToProps = (state) => {

    return {
        wallMessageArray: getWallMessageArrayState(state)
    }
};


const WallContainer = connect(mapStateToProps, null)(Wall);

export default WallContainer;