import React from "react";
import style from "./header.module.css";

import {ReactComponent as User} from "./img/User.svg";
import {ReactComponent as Logo} from "./img/Logo.svg";
import {ReactComponent as Messages} from "./img/Message-square.svg";
import {ReactComponent as News} from "./img/News.svg";
import {ReactComponent as Music} from "./img/Music.svg";
import {ReactComponent as Settings} from "./img/Settings.svg";
import {Link} from "react-router-dom";


export const Header = (props) => {
    return (
        <header className={style.header}>
            <>
                <div className={style.header__logo_wrapper}>
                    <Logo />
                </div>
                <nav>
                    <ul className={style.header__nav}>
                        <li><Link className={style.header__list_item} to = "/">Profile <User /></Link></li>
                        <li><Link className={style.header__list_item} to = "/chat">Messages <Messages /></Link></li>
                        <li><Link className={style.header__list_item} to = "/news">News <News /></Link></li>
                        <li><Link className={style.header__list_item} to = "/music">Music <Music /></Link></li>
                        <li><Link className={style.header__list_item} to = "/settings">Settings <Settings /></Link></li>
                    </ul>
                </nav>
                <>
                    <input className={style.header__search} type="text" placeholder={"Search"}/>
                </>
            </>
        </header>
    )
}