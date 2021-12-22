import {Box, Rating} from "@mui/material";
import style from "./getGradeSlider.module.css";
import React from "react";

const GetGradeStars = ({range, evaluation, setEvaluation, isDisable, setIsDisable, setIsShowEvaluation}) => {

    return (
        <Box className={range === 10 ? `${style.large} ${style.wrapper}` : `${style.small} ${style.wrapper}`}>
            <h3 className={style.header}>{`Вы готовы рекомендовать нас друзьям и коллегам`}</h3>
            <Rating className={range === 10 ? `${style.tenStars} ${style.starsBlock}` : `${style.fiveStars} ${style.starsBlock}`} onChange={(event, value) => {
                setEvaluation(value);
            }} aria-label={"Default"} valueLabelDisplay={"off"} min={1} max={range} disabled={isDisable} size={"large"}
                    sx={{
                        display: `flex`,
                        justifyContent: `center`,
                        fontSize: `70px`,
                        '& .MuiRating-label': {
                            fontSize: '70px',
                        },
                        '& .MuiRating-root': {
                            width: '75%',
                        },
                    }}/>
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