import {Box, Slider} from "@mui/material";
import style from "./getGradeSlider.module.css";
import Numbers from "../numbers/numbers";
import React from "react";

const GetGradeSlider = ({range, evaluation, setEvaluation, isDisable, setIsDisable, setIsShowEvaluation}) => {

    return (
            <Box className={style.wrapper}>
                <h3 className={style.header}>{`Вы готовы рекомендовать нас друзьям и коллегам`}</h3>
                <div className={style.numberBlock}>
                    <Numbers range={range} number={evaluation}/>
                </div>
                <Slider onChange={(event) => {
                    if (event.target.value !== evaluation) {
                        setEvaluation(event.target.value);
                    }
                }} aria-label={"Default"} valueLabelDisplay={"off"} min={1} max={range} disabled={isDisable}/>
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

export default GetGradeSlider;