import style from "./pagination.module.css"
import React, {ReactElement, useState} from "react"
import {IPaginationProps} from "../../../types/types"


const Pagination: React.FC<IPaginationProps> = ({
                                                    totalUsers,
                                                    usersOnPage,
                                                    pageSize,
                                                    onPageChanged,
                                                    currentPage
                                                }): ReactElement => {

    let pagesCount = Math.ceil(totalUsers / usersOnPage);
    let pagesArray = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * pageSize +1;
    let rightPortionPageNumber = portionNumber * pageSize;

    return (
        <div className={style.pageButtonsContainer}>
            { portionNumber >= 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber - 1)}} className={style.button} disabled={portionNumber === 1}>Prev pages</button>
            }
            {
                pagesArray.filter((page)=> page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map((page) => {
                    return (
                        <button key={page} onClick={() => {
                            onPageChanged(page)
                        }}
                                className={page === currentPage ? `${style.pageButton} ${style.current}` : style.pageButton}>{page}
                        </button>
                    )
                })
            }
            { portionCount >= portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber + 1)}} className={style.button} disabled={portionNumber === portionCount}>Next pages</button>
            }
        </div>
    )
}

export default Pagination;