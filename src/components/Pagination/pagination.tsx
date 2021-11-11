import React, { useEffect, useState } from "react";

import "@cosmos/pagination/pagination.css";
import "@cosmos/dropdown";

interface PaginationProps {
    onClickPrevious: any;
    onClickNext: any;
    pageNumber: number;
}

function Pagination({ onClickPrevious, onClickNext }: PaginationProps) {
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const local = localStorage.getItem("@projeto/numberOfPages/");
        let localstorage;
        if (local) {
            localstorage = JSON.parse(local);
            setNumberOfPages(localstorage.numberOfPages);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("@projeto/page/", JSON.stringify({ page: page }));
    }, [page]);

    return (
        <hot-pagination>
            <hot-pagination-item
                {...(page === 1 && {
                    class: "hot-pagination__item--disabled",
                })}
                onClick={() => {
                    onClickPrevious(setPage);
                }}
            >
                <span className="hot-pagination__prev">Prev</span>
            </hot-pagination-item>

            <hot-pagination-item
                {...(page === numberOfPages && {
                    class: "hot-pagination__item--disabled",
                })}
                onClick={() => {
                    onClickNext(setPage);
                }}
            >
                <span className="hot-pagination__next">Next</span>
            </hot-pagination-item>
        </hot-pagination>
    );
}

export default Pagination;
