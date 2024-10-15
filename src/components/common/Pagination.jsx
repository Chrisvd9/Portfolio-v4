import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      <ol
        className="flex justify-center gap-1 text-xs font-medium"
        role="navigation"
        aria-label="Pagination"
      >
        <li>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`inline-flex size-8 items-center justify-center rounded border dark:border-border_dark hover:border-secondary dark:hover:border-secondary chrisvd9_transition ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous Page"
          >
            <HiChevronLeft className="size-3" />
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`block size-8 rounded border dark:border-border_dark hover:border-secondary dark:hover:border-secondary chrisvd9_transition text-center leading-8 ${
                  currentPage === page ? "border-secondary dark:border-secondary" : ""
                }`}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`inline-flex size-8 items-center justify-center rounded border dark:border-border_dark hover:border-secondary dark:hover:border-secondary chrisvd9_transition ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next Page"
          >
            <HiChevronRight className="size-3" />
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
