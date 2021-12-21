import React, {useState} from "react";
import GetGradeSlider from "./getGrade/getGradeSlider";
import ShowGarde from "./showGrade/showGrade";

const SliderEvaluation = ({range}) => {

    let [evaluation, setEvaluation] = useState(1);
    let [isDisable, setIsDisable] = useState(false);
    let [isShowEvaluation, setIsShowEvaluation] = useState(false)

    return (
        isShowEvaluation ? <ShowGarde evaluation={evaluation} setIsShowEvaluation={setIsShowEvaluation}/>
            : <GetGradeSlider range={range}
                              evaluation={evaluation}
                              setEvaluation={setEvaluation}
                              isDisable={isDisable}
                              setIsDisable={setIsDisable}
                              setIsShowEvaluation={setIsShowEvaluation}/>
    )
}

export default SliderEvaluation;