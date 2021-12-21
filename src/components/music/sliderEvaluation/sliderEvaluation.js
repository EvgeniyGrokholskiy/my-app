import React, {useState} from "react";
import ShowGarde from "./showGrade/showGrade";
import GetGradeStars from "./getGrade/getGradeStars";
import GetGradeSlider from "./getGrade/getGradeSlider";

const SliderEvaluation = ({range, isAuth, species}) => {

    let [evaluation, setEvaluation] = useState(1);
    let [isDisable, setIsDisable] = useState(false);
    let [isShowEvaluation, setIsShowEvaluation] = useState(false)

    return (
        isShowEvaluation ? <ShowGarde evaluation={evaluation}
                                      setIsShowEvaluation={setIsShowEvaluation}
                                      setIsDisable={setIsDisable}
                                      setEvaluation={setEvaluation}
                                      isAuth={isAuth}/>
            : species === 1 ? <GetGradeSlider range={range}
                             evaluation={evaluation}
                             setEvaluation={setEvaluation}
                             isDisable={isDisable}
                             setIsDisable={setIsDisable}
                             setIsShowEvaluation={setIsShowEvaluation}/>
                            : <GetGradeStars range={range}
                                              evaluation={evaluation}
                                              setEvaluation={setEvaluation}
                                              isDisable={isDisable}
                                              setIsDisable={setIsDisable}
                                              setIsShowEvaluation={setIsShowEvaluation}/>
    )
}

export default SliderEvaluation;