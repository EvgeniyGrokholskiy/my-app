import "./App.css";
import FindUsers from "./components/findUsers/findUsers";
import Profile from "./components/profile/Profile";
import Chat from "./components/chat/chat";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";



function App(props) {

    return (
        <div className="App">
            <HeaderContainer />
            <main>
                <Routes>
                    <Route path="/users" element={<FindUsers/>}/>
                    <Route path="/profile/*" element={<Profile/>}/>
                    <Route path="/chat/*" element={<Chat/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
