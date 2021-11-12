import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {Chat} from "./components/chat/chat";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Profile/>}/>.
                        <Route path="/chat/*" element={<Chat/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
