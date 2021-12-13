import "./App.css";
//import FindUsers from "./components/findUsers/findUsers";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/commons/header/HeaderContainer";
import Profile from "./components/profile/Profile";
import ChatContainer from "./components/chat/chatContainer";
import LoginContainer from "./components/login/loginContainer";
import React from "react";
import {connect} from "react-redux";
import {authThunkCreator} from "./redux/authReducer";
import Loading from "./components/commons/loading/loading";
import {initializeApp} from "./redux/appReducer";
const FindUsers = React.lazy(() => import('./components/findUsers/findUsers'));


class App extends React.Component {

   componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.app.initialized) {
            return <Loading/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <main>
                    <Routes>
                        <Route path="/" element={<LoginContainer/>}/>
                        <Route path="/users" element={
                            <React.Suspense fallback={<Loading />}><FindUsers/></React.Suspense>
                        }/>
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route path="/chat/*" element={<ChatContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps,{authThunkCreator,initializeApp})(App)



