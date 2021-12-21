import {Box, Rating} from "@mui/material";
import style from "./getGradeSlider.module.css";
import React from "react";

const GetGradeStars = ({range, evaluation, setEvaluation, isDisable, setIsDisable, setIsShowEvaluation}) => {

    return (
        <Box className={style.wrapper}>
            <h3 className={style.header}>{`Вы готовы рекомендовать нас друзьям и коллегам`}</h3>
            {/*            <div className={style.numberBlock}>
                <Numbers range={range} number={evaluation}/>
            </div>*/}
            <Rating className={style.starsBlock} onChange={(event, value) => {
                setEvaluation(value);
            }} aria-label={"Default"} valueLabelDisplay={"off"} min={1} max={range} disabled={isDisable} size={"large"} classes={{label:{style:"fontSize: 70px;"}}}/>
            <div className={style.label}>
                <span>Не готов рекомендовать</span>
                <span>Обязательно рекомендую</span>
            </div>
            <button onClick={() => {
                setIsDisable(true)
                setIsShowEvaluation(true)
            }} className={style.button}>Отправить отзыв
            </button>
        </Box>
    )
}

export default GetGradeStars;