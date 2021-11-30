import React from "react";
import style from "./header.module.css";

import {ReactComponent as FindUsers} from "./img/findUsers.svg";
import {ReactComponent as User} from "./img/User.svg";
import {ReactComponent as Logo} from "./img/Logo.svg";
import {ReactComponent as Messages} from "./img/Message-square.svg";
import {ReactComponent as News} from "./img/News.svg";
import {ReactComponent as Music} from "./img/Music.svg";
import {ReactComponent as Settings} from "./img/Settings.svg";
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={style.header}>
            <>
                <div className={style.logo}>
                    <Logo/>
                </div>
                <nav>
                    <ul className={style.nav}>
                        <li><NavLink className={style.list_item} to="/users">Find Users <FindUsers/></NavLink></li>
                        <li><NavLink className={style.list_item} to="/profile/">Profile <User/></NavLink></li>
                        <li><NavLink className={style.list_item} to="/chat">Messages <Messages/></NavLink></li>
                        <li><NavLink className={style.list_item} to="/news">News <News/></NavLink></li>
                        <li><NavLink className={style.list_item} to="/music">Music <Music/></NavLink></li>
                        <li><NavLink className={style.list_item} to="/settings">Settings <Settings/></NavLink></li>
                    </ul>
                </nav>
                <div className={style.loginBlock}>
                    {
                        props.state.isAuth ? <span className={style.loginName}>{props.state.login}</span> : <></>
                    }
                    {
                        props.state.isAuth ? <button className={style.loginButton}>LogOut</button> :
                            <button className={style.loginButton}>LogIn</button>
                    }

                    {/*<button className={style.loginButton}>LogIn</button>
                    <button className={style.loginButton}>LogOut</button>*/}
                </div>
            </>
        </header>
    )
}

export default Header;