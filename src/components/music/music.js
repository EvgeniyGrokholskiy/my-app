import React, {useState} from "react";
import style from "./music.module.css";
import SliderEvaluation from "./sliderEvaluation/sliderEvaluation";

const Music = (props) => {

    let [range, setRange] = useState(props.range)
    let [species, setSpecies] = useState("slider")
    let [isAuth, setIsAuth] = useState(false)

    return (
        <div className={style.container}>
            <>
                <div className={style.tuningBlock}>
                    <label className={style.tuningLabel}> Выберите тип опроса:
                        <label> Слайдер.
                            <input type="radio" name="species" value={"slider"} onChange={(event) => {
                                setSpecies(event.target.value)
                            }}/>
                        </label>
                        <label> Звезды.
                            <input type="radio" name="species" value={"stars"} onChange={(event) => {
                                setSpecies(event.target.value)
                            }}/>
                        </label>
                    </label>
                    <label className={style.tuningLabel}> Выберите диапазон:
                        <label> Шкала 5 пунктов
                            <input type="radio" name="grade" value={5} onChange={(event) => {
                                setRange(+event.target.value)
                            }}/>
                        </label>
                        <label> Шкала 10 пунктов
                            <input type="radio" name="grade" value={10} onChange={(event) => {
                                setRange(+event.target.value)
                            }}/>
                        </label>
                    </label>
                    <label className={style.tuningLabel}> Выберите авторизацию::
                        <label> Пользователь авторизован?
                            <input type="checkbox" name="isAuth" onChange={(event) => {
                                setIsAuth(event.target.checked)
                            }}/>
                        </label>
                    </label>
                </div>
            </>
            {
                <SliderEvaluation range={range} isAuth={isAuth} species={species}/>
            }
        </div>
    )
}

export default Music;