import { Pagination } from 'react-bootstrap';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    const pageRange = 3; 

    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(totalPages, startPage + pageRange - 1);

    const handlePrev = () => onPageChange(Math.max(1, currentPage - 1));
    const handleNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

    return (
        <Pagination className="justify-content-end">
            <Pagination.Prev className='pre-page' onClick={handlePrev} disabled={currentPage === 1}>
                <FaCaretLeft color='#A098AE'/>
            </Pagination.Prev>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(
                (page) => (
                    <Pagination.Item className='current-page'
                    key={page}
                        active={page === currentPage}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Pagination.Item>
                )
            )}
            <Pagination.Next className='next-page' onClick={handleNext} disabled={currentPage === totalPages}>
                <FaCaretRight color='#A098AE' />
            </Pagination.Next>
        </Pagination>
    );
};

export default PaginationComponent;
