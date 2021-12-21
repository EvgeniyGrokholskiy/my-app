import React, {useState} from "react";
import style from "./music.module.css";
import SliderEvaluation from "./sliderEvaluation/sliderEvaluation";

const Music = (props) => {

    let [range, setRange] = useState(props.range)
    let [species, setSpecies] = useState(1)

    return (
        <div className={style.container}>
            <>
                <div className={style.tuningBlock}>
                    <label className={style.tuningLabel}> Выберите диапазон:
                        <label> 5
                            <input type="radio" name="grade" value={5} onChange={(event)=>{setRange(+event.target.value)}}/>
                        </label>
                        <label> 10
                            <input type="radio" name="grade" value={10} onChange={(event)=>{setRange(+event.target.value)}}/>
                        </label>
                    </label>
                </div>
            </>
            {
                <SliderEvaluation range={range}/>
            }
        </div>
    )
}

export default Music;