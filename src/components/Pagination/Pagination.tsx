import './Pagination.css';

interface PaginationProps {
    totalEntries : number, 
    totalPages : number, 
    currentPage : number, 
    nextPage : () => void, 
    previousPage: () => void, 
}

const Pagination = ({totalEntries, totalPages, currentPage, nextPage, previousPage}: PaginationProps) => {
    if (totalPages === 1) return <></>

    return (
        <div className="pagination-container">
            <span className="help-text">
                <span className="highlight">{((currentPage-1)*5)+1}</span> to <span className="highlight">
                {Math.min(currentPage*5, totalEntries)}</span> of <span className="highlight">{totalEntries}</span> Entries
            </span>
            <div className="button-container">
                <button className="pagination-button prev" onClick={previousPage}>
                Prev
                </button>
                <button className="pagination-button next" onClick={nextPage}>
                Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;