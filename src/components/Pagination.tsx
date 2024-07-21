import { useRef } from "react";
import { useRouter } from "next/router";
import React from "react";

interface PaginationProps {
  total: number;
}

const Pagination: React.FC<PaginationProps> = ({ total }) => {
  const pagination = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { query } = router;
  const currentPage = query.page ? parseInt(query.page as string) : 1;

  const handleClick = (page: number) => {
    router.replace({
      pathname: router.pathname,
      query: { ...query, page },
    });

    setTimeout(() => {
      pagination.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 500);
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
              currentPage === page
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
