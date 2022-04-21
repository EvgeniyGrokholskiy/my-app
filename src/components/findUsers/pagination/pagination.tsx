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

    const pagesCount: number = Math.ceil(totalUsers / usersOnPage);
    let pagesArray: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }

    const portionCount: number = Math.ceil(pagesCount / pageSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber: number = (portionNumber - 1) * pageSize + 1;
    const rightPortionPageNumber: number = portionNumber * pageSize;

    return (
        <div className={style.pageButtonsContainer}>
            {portionNumber >= 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
                onPageChanged(leftPortionPageNumber - 10)
            }} className={style.button} disabled={portionNumber === 1}>Prev pages</button>
            }
            {
                pagesArray.filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
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
            {portionCount >= portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
                onPageChanged(rightPortionPageNumber + 1)
            }} className={style.button} disabled={portionNumber === portionCount}>Next pages</button>
            }
        </div>
    )
}

export default Pagination;