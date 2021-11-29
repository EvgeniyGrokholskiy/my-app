import React from "react";
import style from "../userCard.module.css";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.usersOnPage);
    let pagesArray = [];

    for (let i = 1; i <= (pagesCount >= 20 ? 20 : pagesCount); i++) {
        pagesArray.push(i);
    }

    return (
        <div className={style.pageButtonsContainer}>
            {

                pagesArray.map((page) => {

                    return (
                        <button key={page} onClick={() => {
                            props.onPageChanged(page)
                        }}
                                className={page === props.currentPage ? `${style.pageButton} ${style.current}` : style.pageButton}>{page}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination;