import style from "./numbers.module.css";
import React from "react";

let Numbers = ({range, number}) => {


    let numbersArray = []
    for (let i = 1; i <= range; i++) {
        numbersArray.push(i)
    }

    let ratingNumber = numbersArray.map((element) => {
        return (
            <span key={element}
                  className={number === element ? `${style.current} ${style.number}` : style.number}>{element}</span> //style={{position: "relative", left: 11 * (element-1) + `%`}}
        )
    })

    return (
        <>
            {ratingNumber}
        </>
    )
}

export default Numbers;