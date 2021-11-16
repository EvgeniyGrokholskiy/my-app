import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

export function rerender() {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     setNewMessageOnWall={store.setNewMessageOnWall.bind(store)}
                     addMessageOnWall={store.addMessageOnWall.bind(store)}
                     setActiveChatName={store.setActiveChatName.bind(store)}
                     setNewMessageInChat={store.setNewMessageInChat.bind(store)}
                     sendMessage={store.sendMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender();

store.subscriber(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
