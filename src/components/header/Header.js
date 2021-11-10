import React from "react";
import style from "./header.module.css";

import {ReactComponent as User} from "./img/User.svg";
import {ReactComponent as Logo} from "./img/Logo.svg";
import {ReactComponent as Messages} from "./img/Message-square.svg";
import {ReactComponent as News} from "./img/News.svg";
import {ReactComponent as Music} from "./img/Music.svg";
import {ReactComponent as Settings} from "./img/Settings.svg";


export const Header = (props) => {
    return (
        <header className={style.header}>
            <>
                <div className={style.header__logo_wrapper}>
                    <Logo />
                </div>
                <nav>
                    <ul className={style.header__nav}>
                        <li className={style.header__list_item}>Profile <User /></li>
                        <li className={style.header__list_item}>Messages <Messages /></li>
                        <li className={style.header__list_item}>News <News /></li>
                        <li className={style.header__list_item}>Music <Music /></li>
                        <li className={style.header__list_item}>Settings <Settings /></li>
                    </ul>
                </nav>
                <>
                    <input className={style.header__search} type="text" placeholder={"Search"}/>
                </>
            </>
        </header>
    )
}