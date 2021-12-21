import {Box, Slider} from "@mui/material";
import style from "./showGrade.module.css";
import React from "react";

const ShowGarde = ({evaluation, setEvaluation, isAuth = true, setIsShowEvaluation, setIsDisable, textEvaluation='отлично!'}) => {
    return (
        <>
            <Box className={style.wrapper}>
                <h4 className={style.header}>{`Спасибо, что поделились мнением`}</h4>
                <span className={style.evaluation}>{evaluation}</span>
                <p className={style.youEvaluation}>{`Ваша оценка - ${textEvaluation}`}</p>
                {
                    isAuth ?
                        <div className={style.statisticWrapper}>
                            <div className={style.statisticBlock1}>
                                <div className={style.statisticBlockItem}>1</div>
                                <div className={style.statisticBlockItem}>2</div>
                                <div className={style.statisticBlockItem}>3</div>
                            </div>
                            <div className={`${style.statisticBlock2} ${style.statisticBlockItem}`}>4</div>
                        </div>
                        : <></>
                }
            </Box>
            <button onClick={() =>{
                setIsShowEvaluation(false)
                setIsDisable(false)
                setEvaluation(1)
            }}>Назад</button>
        </>
    )
}

export default ShowGarde;