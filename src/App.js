import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Chat} from "./components/chat/chat";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element = {<Profile />} />.
                        <Route path="/chat" element = {<Chat />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
