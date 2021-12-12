import React, {useState} from "react";
import style from "../userCard.module.css";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.usersOnPage);
    let pagesArray = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }

    let portionCount = Math.ceil(pagesCount/props.pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * props.pageSize +1;
    let rightPortionPageNumber = portionNumber * props.pageSize;

    return (
        <div className={style.pageButtonsContainer}>
            { portionNumber >= 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber - 1)}} className={style.button} disabled={portionNumber === 1}>Prev</button>
            }
            {
                pagesArray.filter((page)=> page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map((page) => {
                    return (
                        <button key={page} onClick={() => {
                            props.onPageChanged(page)
                        }}
                                className={page === props.currentPage ? `${style.pageButton} ${style.current}` : style.pageButton}>{page}
                        </button>
                    )
                })
            }
            { portionCount >= portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber + 1)}} className={style.button} disabled={portionNumber === portionCount}>Next</button>
            }
        </div>
    )
}

export default Pagination;