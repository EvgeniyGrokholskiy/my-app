import {Box, Slider} from "@mui/material";
import style from "./showGrade.module.css";
import React from "react";

const ShowGarde = ({evaluation,auth=true, setIsShowEvaluation}) => {
    return (
        <>
            <Box className={style.wrapper}>
                <h4 className={style.header}>{`Спасибо, что поделились мнением`}</h4>
                <span className={style.evaluation}>{evaluation}</span>
                <p className={style.youEvaluation}>{`Ваша оценка - ${`отлично!`}`}</p>
                {
                    auth ?
                        <div className={style.statisticWrapper}>
                            <div className={`${style.statisticBlock1} ${style.statisticBlock}`}></div>
                            <div className={`${style.statisticBlock2} ${style.statisticBlock}`}></div>
                            <div className={`${style.statisticBlock3} ${style.statisticBlock}`}></div>
                            <div className={`${style.statisticBlock4} ${style.statisticBlock}`}></div>
                        </div>
                        : <></>
                }
            </Box>
            <button onClick={() =>{setIsShowEvaluation(false)}}>Назад</button>
        </>
    )
}

export default ShowGarde;