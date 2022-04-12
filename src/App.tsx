import "./App.css"
import React from "react"
import {connect} from "react-redux"
import {IAppProps} from "./types/types"
import News from "./components/news/news"
import Music from "./components/music/music"
import {getAppState} from "./redux/selectors"
import {Route, Routes} from "react-router-dom"
import {AppStateType} from "./redux/reduxStore"
import {initializeApp} from "./redux/appReducer"
import Profile from "./components/profile/Profile"
import Settings from "./components/settings/settings"
import Loading from "./components/commons/loading/loading"
import ChatContainer from "./components/chat/chatContainer"
import LoginContainer from "./components/login/loginContainer"
import FooterContainer from "./components/commons/footer/footerContainer"
import HeaderContainer from "./components/commons/header/HeaderContainer"


const FindUsers = React.lazy(() => import('./components/findUsers/findUsers'))


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
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route path="/chat/*" element={<ChatContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
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



