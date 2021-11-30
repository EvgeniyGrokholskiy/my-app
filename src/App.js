import "./App.css";
import FindUsers from "./components/findUsers/findUsers";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/login";
import ProfileContainer from "./components/profile/ProfileContainer";
import ChatContainer from "./components/chat/chatContainer";



function App(props) {

    return (
        <div className="App">
            <HeaderContainer />
            <main>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/users" element={<FindUsers/>}/>
                    <Route path="/profile/*" element={<ProfileContainer/>}/>
                    <Route path="/chat/*" element={<ChatContainer/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
