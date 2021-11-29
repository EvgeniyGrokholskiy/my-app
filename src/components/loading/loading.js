import React from "react";
import loadingGif from "../findUsers/img/loading.gif"
import style from "./loading.module.css";

const Loading = () => {
    return (
        <div className={style.container}>
            <img className={style.loadingGif} src={loadingGif} alt={''} />
        </div>
    )
}

export default Loading