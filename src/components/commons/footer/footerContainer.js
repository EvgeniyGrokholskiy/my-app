import {connect} from "react-redux";
import Footer from "./footer";
import {getProfileState} from "../../../redux/selectors";
import {changeLanguages} from "../../../redux/footerReducer";

const mapStateToProps = (state) => {
    return {
        state: getProfileState(state)
    }
}

const FooterContainer = connect(mapStateToProps, {changeLanguages})(Footer)

export default FooterContainer;