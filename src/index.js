import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store, {dispatch} from "./redux/store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

export function rerender() {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} dispatch={dispatch} />
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
