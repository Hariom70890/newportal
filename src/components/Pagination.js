import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../features/articlesSlice';

function Pagination({ currentPage, totalResults }) {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.articles.searchQuery);

  // Calculate the dynamic page size to ensure at least 10 articles per page
  const pageSize = useMemo(() => {
    const minPageSize = 10;
    const maxPageSize = 20;
    const calculatedPageSize = Math.ceil(totalResults / Math.max(Math.ceil(totalResults / maxPageSize), 1));
    return Math.max(calculatedPageSize, minPageSize);
  }, [totalResults]);

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

  // Don't render pagination if there is a search query and results are few
  if (searchQuery && totalResults <= 2) {
    return null;
  }

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