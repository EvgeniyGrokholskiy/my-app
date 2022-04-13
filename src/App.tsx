import "./App.css"
import React from "react"
import {connect} from "react-redux"
import {IAppProps} from "./types/types"
import {getAppState} from "./redux/selectors"
import {Route, Routes} from "react-router-dom"
import {AppStateType} from "./redux/reduxStore"
import {initializeApp} from "./redux/appReducer"
import Loading from "./components/commons/loading/loading"
import LoginContainer from "./components/login/loginContainer"
import FooterContainer from "./components/commons/footer/footerContainer"
import HeaderContainer from "./components/commons/header/HeaderContainer"

const FindUsers = React.lazy(() => import("./components/findUsers/findUsers"))
const Profile = React.lazy(() => import("./components/profile/Profile"))
const ChatContainer = React.lazy(() => import("./components/chat/chatContainer"))
const News = React.lazy(() => import("./components/news/news"))
const Music = React.lazy(() => import("./components/music/music"))
const Settings = React.lazy(() => import("./components/settings/settings"))


class App extends React.Component<IAppProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.app.initialized) {
            return <Loading/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <main>
                    <Routes>
                        <Route path="/" element={<LoginContainer/>}/>
                        <Route path="/users" element={
                            <React.Suspense fallback={<Loading/>}><FindUsers/></React.Suspense>
                        }/>
                        <Route path="/profile/*" element={
                            <React.Suspense fallback={<Loading/>}><Profile/></React.Suspense>
                        }/>
                        <Route path="/chat/*" element={
                            <React.Suspense fallback={<Loading/>}><ChatContainer/></React.Suspense>
                        }/>
                        <Route path="/news/*" element={
                            <React.Suspense fallback={<Loading/>}><News/></React.Suspense>
                        }/>
                        <Route path="/music/*" element={
                            <React.Suspense fallback={<Loading/>}><Music/></React.Suspense>
                        }/>
                        <Route path="/settings/*" element={
                            <React.Suspense fallback={<Loading/>}><Settings/></React.Suspense>
                        }/>
                    </Routes>
                </main>
                <footer>
                    <FooterContainer/>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    app: getAppState(state)
})


const mapDispatchToProps = {
    initializeApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



