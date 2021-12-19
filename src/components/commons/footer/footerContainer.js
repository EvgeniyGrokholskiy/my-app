import {connect} from "react-redux";
import Footer from "./footer";
import {changeLanguages} from "../../../redux/footerReducer";

const mapStateToProps = (state) => {
    return {}
}

const FooterContainer = connect(mapStateToProps, {changeLanguages})(Footer)

export default FooterContainer;