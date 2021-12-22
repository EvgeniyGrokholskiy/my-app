import React, {useState} from "react";
import ShowGarde from "./showGrade/showGrade";
import GetGradeStars from "./getGrade/getGradeStars";
import GetGradeSlider from "./getGrade/getGradeSlider";

const SliderEvaluation = ({range, isAuth, species}) => {

    let [evaluation, setEvaluation] = useState(1);
    let [isDisable, setIsDisable] = useState(false);
    let [isShowEvaluation, setIsShowEvaluation] = useState(false)

    return (
        isShowEvaluation
            ? <ShowGarde evaluation={evaluation}
                         setIsShowEvaluation={setIsShowEvaluation}
                         setIsDisable={setIsDisable}
                         setEvaluation={setEvaluation}
                         isAuth={isAuth}/>
            : species === "slider"
                ? <GetGradeSlider range={range}
                                  evaluation={evaluation}
                                  setEvaluation={setEvaluation}
                                  isDisable={isDisable}
                                  setIsDisable={setIsDisable}
                                  setIsShowEvaluation={setIsShowEvaluation}/>
                : species === "stars"
                    ? <GetGradeStars range={range}
                                     evaluation={evaluation}
                                     setEvaluation={setEvaluation}
                                     isDisable={isDisable}
                                     setIsDisable={setIsDisable}
                                     setIsShowEvaluation={setIsShowEvaluation}/>
                    : <>Oops! Wrong props.</>
    )
}

export default SliderEvaluation;