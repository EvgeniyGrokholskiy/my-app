import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

//data - test

let wallMessageArray = [
    {message: "How’s your day going, guys?", likeCount: "10", id: "1"},
    {message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?", likeCount: "20", id: "2"}
];

let chatsList = [
    {name:'Darlene Black', id:'1', lastMessage: 'Hey, how is your project?',},
    {name:'Theresa Steward', id:'2', lastMessage: 'Hi, Dmitry! I have a work for you. We',},
    {name:'Brandon Wilson', id:'3', lastMessage: 'I am Russian and I am learning Engl',},
    {name:'Kyle Fisher', id:'4', lastMessage: 'So, It’s up to you!',},
    {name:'Audrey Alexander', id:'5', lastMessage: 'When you got it?',},
    {name:'Design Conference', id:'6', lastMessage: 'Can you guys help me with it?',},
];

let chatMessageArray = [
    {message: "Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!", type: "in", id: "1"},
    {message: "Hi, Kyle. How are you doing? Did you get that job yesterday?", type: "out", id: "2"},
    {message: "Nope, they kicked me out of the office!", type: "in", id: "3"},
    {message: "Wow! I can invite you in my new project. We need a product designer right now!", type: "out", id: "4"},
    {message: "It’ll be great! I need this job, but...", type: "in", id: "5"},
    {message: "So, it’s up to you!", type: "in", id: "6"},
]

//


ReactDOM.render(
  <React.StrictMode>
    <App wallMessageArray = {wallMessageArray} chat = {chatsList} chatMessage = {chatMessageArray} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
