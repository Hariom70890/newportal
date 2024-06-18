import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../features/articlesSlice';

function Pagination({ currentPage, totalResults, pageSize }) {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;