import { useRef } from "react";
import React from "react";

interface PaginationProps {
  total: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, page: currentPage, setPage }) => {
  const pagination = useRef<HTMLDivElement>(null);

  const handleClick = (page: number) => {
    setPage(page);
  };

  return (
    <div
      ref={pagination}
      id="pagination"
      className="flex justify-center space-x-2 mt-10 mb-32"
    >
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={`w-10 h-10 rounded-[10px] font-bold text-sm leading-[16.94px]
            active:opacity-95 active:scale-95
         transition duration-400 ease-in-out
            ${
              page === currentPage
                ? "bg-[#699CFF] text-white"
                : "bg-[#F7F7F7] text-[#A4A4A4] border"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
