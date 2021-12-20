import React, {useState} from "react";
import style from "./music.module.css";
import {Box, Slider} from "@mui/material";

const Music = (props) => {

    let until = 10

    let [number, setNumber] = useState(1);
    let [disable, setDisable] = useState(false)

    let numbersArray = []

    for(let i = 1; i <= until; i++){
        numbersArray.push(i)
    }

    let test = numbersArray.map((element)=>{
        return (
            <span key={element} className={number === element ?`${style.current} ${style.number}` :style.number}>{element}</span>
        )
    })

    return (
        <div className={style.container}>
            Music

            <Box className={style.wrapper}>
                <h3 className={style.header}>{`Вы готовы рекомендовать нас друзьям и коллегам`}</h3>
                <div className={style.numberBlock}>
                    {test}
                </div>
                <Slider onChange={(event)=>{
                    if(event.target.value !== number){
                        setNumber(event.target.value);
                    }
                }} aria-label={"Default"} valueLabelDisplay={"off"} min={1} max={until} disabled={disable} />
                <div className={style.label}>
                    <span>Не готов рекомендовать</span>
                    <span>Обязательно рекомендую</span>
                </div>
                <button onClick={()=> {
                    console.log(number)
                    setDisable(true);
                }} className={style.button}>Отправить отзыв</button>
            </Box>
        </div>
    )
}

export default Music;