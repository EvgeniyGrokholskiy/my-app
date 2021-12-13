import React, {useState} from "react";
import style from "./footer.module.css";
import {ReactComponent as Logo} from "./img/Logo.svg";
import {ReactComponent as Text} from "./img/LinkedIn.svg";
import {ReactComponent as Question} from "./img/help-circle.svg";
import {ReactComponent as Settings} from "./img/settings.svg";
import {NavLink} from "react-router-dom";


const Footer = (props) => {

    const [language, setLanguage] = useState(1);

    const setLanguages = (value) => {
        setLanguage(value)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.logoBlock}>
                <Logo className={style.logo}/>
                <Text className={style.logoText}/>
            </div>
            <div className={style.navigation}>
                <h4 className={style.header}>Navigation</h4>
                <nav>
                    <ul className={style.navList}>
                        <li><NavLink className={style.list_item} to="/users">Find Users</NavLink></li>
                        <li><NavLink className={style.list_item} to="/profile/">Profile</NavLink></li>
                        <li><NavLink className={style.list_item} to="/chat">Messages</NavLink></li>
                        <li><NavLink className={style.list_item} to="/news">News</NavLink></li>
                        <li><NavLink className={style.list_item} to="/music">Music</NavLink></li>
                        <li><NavLink className={style.list_item} to="/settings">Settings</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className={style.solution}>
                <nav>
                    <ul className={style.navList}>
                        <li><NavLink className={style.list_item} to="">Talent Solutions</NavLink></li>
                        <li><NavLink className={style.list_item} to="">Marketing Solutions</NavLink></li>
                        <li><NavLink className={style.list_item} to="">Sales Solutions</NavLink></li>
                        <li><NavLink className={style.list_item} to="">Safety Center</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className={style.utils}>
                <nav>
                    <ul className={style.navList}>
                        <li><NavLink className={style.list_item} to="">Community Guidelines</NavLink></li>
                        <li><NavLink className={style.list_item} to="">Privacy & Terms</NavLink></li>
                        <li><NavLink className={style.list_item} to="">Mobile App</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className={style.buttons}>
                <h4 className={style.header}>Fast access</h4>
                <nav>
                    <ul className={style.navList}>
                        <li><NavLink className={`${style.list_item} , ${style.button}`}
                                     to="">QUESTIONS?<Question/></NavLink></li>
                        <li><NavLink className={`${style.list_item} , ${style.button} ${style.whiteButton}`} to="">SETTINGS<Settings/></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={style.languages}>
                <h4 className={style.header}>Languages:{(language === 1) ? " english" : " русский"}</h4>
                <select value={language} className={style.select} onChange={
                    (event) => {
                        setLanguages(+event.currentTarget.value)
                    }
                }>
                    <option value={1}>English</option>
                    <option value={2}>Русский</option>
                </select>
            </div>
        </div>
    )
}


export default Footer;