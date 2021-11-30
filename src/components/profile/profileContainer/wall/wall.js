import React from "react";
import style from './wall.module.css';

const Wall = (props) => {

    return (
        <div className={style.wrapper}>

            {props.children}

        </div>
    );
};

export default Wall;