import Footer from "./footer"
import {connect} from "react-redux"
import {AppStateType} from "../../../redux/reduxStore"
import {changeLanguages} from "../../../redux/footerReducer"
import {getLanguages} from "../../../redux/selectors";

const mapStateToProps = (state:AppStateType) => ({
  languages: getLanguages(state)
})

const FooterContainer = connect(mapStateToProps, {changeLanguages})(Footer)

export default FooterContainer