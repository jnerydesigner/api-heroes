import { usePage } from "../context/page.context";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
}) => {
  const { handlePageChange, pageCurrent, totalPages: total } = usePage();

  return (
    <div className="w-full flex justify-center items-center py-4">
      <div className="flex space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 disabled:opacity-50 circle"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border border-gray-300 rounded-md ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white circle"
                : "bg-white text-gray-700 hover:bg-gray-100 circle"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
