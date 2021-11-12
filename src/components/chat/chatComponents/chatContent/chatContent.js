import React, {Fragment} from "react";
import style from "./chatContent.module.css";
import {IncomingMessage} from "../incomingMessage/incomingMessage";
import {OutgoingMessage} from "../outgoingMessage/outgoingMessage";

let messageArray = [
    {message: 'Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!', type: 'in'},
    {message: 'Hi, Kyle. How are you doing? Did you get that job yesterday?', type: 'out'},
    {message: 'Nope, they kicked me out of the office!', type: 'in'},
    {message: 'Wow! I can invite you in my new project. We need a product designer right now!', type: 'out'},
    {message: 'It’ll be great! I need this job, but...', type: 'in'},
    {message: 'So, it’s up to you!', type: 'in '},
]

let chatToRender = messageArray.map((message) => {

        if(message.type === 'in'){
            return <IncomingMessage message = {message.message} />;
        } else {
            return <OutgoingMessage message = {message.message} />;
        }

})
export const ChatContent = (props) => {
    return (
        <>
            <h6 className={style.header}>Chat with <span className={style.chatName}>{props.chatName ? props.chatName: "no data!!!" }</span></h6>
            <div className={style.chatting}>

                {chatToRender}

                {/*<IncomingMessage message = "Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!" />
                <OutgoingMessage message = "Hi, Kyle. How are you doing? Did you get that job yesterday?" />
                <IncomingMessage message = "Nope, they kicked me out of the office!" />
                <OutgoingMessage message = "Wow! I can invite you in my new project. We need a product designer right now!" />
                <IncomingMessage message = "It’ll be great! I need this job, but..." />
                <IncomingMessage message = "So, it’s up to you!" />*/}
            </div>
        </>
    )
}