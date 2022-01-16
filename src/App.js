import "./App.css";
import React from "react";
import {connect} from "react-redux";
import News from "./components/news/news";
import Music from "./components/music/music";
import {getAppState} from "./redux/selectors";
import {Route, Routes} from "react-router-dom";
import {initializeApp} from "./redux/appReducer";
import Profile from "./components/profile/Profile";
import {authThunkCreator} from "./redux/authReducer";
import Settings from "./components/settings/settings";
import Loading from "./components/commons/loading/loading";
import ChatContainer from "./components/chat/chatContainer";
import LoginContainer from "./components/login/loginContainer";
import FooterContainer from "./components/commons/footer/footerContainer";
import HeaderContainer from "./components/commons/header/HeaderContainer";


const FindUsers = React.lazy(() => import('./components/findUsers/findUsers'));


class App extends React.Component {

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
                        <Route path="/music/*" element={<Music range={10}/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </main>
                <footer>
                    <FooterContainer/>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: getAppState(state)
    }
}

export default connect(mapStateToProps, {authThunkCreator, initializeApp})(App)



