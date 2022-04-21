import Footer from "./footer"
import {connect} from "react-redux"
import {getLanguages} from "../../../redux/selectors"
import {AppStateType} from "../../../redux/reduxStore"
import {changeLanguages} from "../../../redux/footerReducer"

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = typeof mapDispatchToProps

const mapStateToProps = (state: AppStateType) => ({
    languages: getLanguages(state)
})

const mapDispatchToProps = {
    changeLanguages
}

const FooterContainer = connect<TMapStateToProps, TMapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer