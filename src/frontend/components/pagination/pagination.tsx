import React from 'react';
import { PaginationProps } from './types';

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded`}
        >
          {index + 1}
        </button>
      ));
    }

    const startPages = Array.from({ length: 8 }, (_, index) => (
      <button
        key={index}
        onClick={() => handlePageClick(index + 1)}
        className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'} rounded`}
      >
        {index + 1}
      </button>
    ));

    return (
      <>
        {startPages}
        <span className="px-4 py-2 mx-1">...</span>
        <button
          onClick={() => handlePageClick(totalPages)}
          className={`px-4 py-2 mx-1 ${totalPages === currentPage ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'} rounded`}
        >
          {totalPages}
        </button>
      </>
    );
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
