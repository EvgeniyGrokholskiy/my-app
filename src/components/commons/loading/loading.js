import React from "react";
import style from "./loading.module.css";
import loadingGif from "../../findUsers/img/loading.gif"


const Loading = () => {
    return (
        <div className={style.container}>
            <img className={style.loadingGif} src={loadingGif} alt={''} />
        </div>
    )
}

export default Loading