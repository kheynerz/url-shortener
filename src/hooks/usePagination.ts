import { useState } from "react";
import { Url } from "src/types/shortUrl"

const usePagination = (urls: Url[]) => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;
    const totalEntries = urls.length

    const totalPages = Math.ceil(totalEntries / itemsPerPage);

    const nextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const previousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return { 
        totalEntries, 
        totalPages, 
        currentPage, 
        nextPage, 
        previousPage, 
        pageUrls: urls.slice(startIndex, endIndex)
    };
}

export default usePagination;