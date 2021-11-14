import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {addMessageOnWall, sendMessage} from "./redux/state";
import App from './App';
import {BrowserRouter} from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

export function rerender () {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addMessageOnWall} sendMessage={sendMessage} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}