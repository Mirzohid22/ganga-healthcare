import React from 'react';

export default function SkeletonProduct() {
  return (
    <div className="h-[260px] md:h-[360px] lg:h-[420px] w-[180px] md:w-[230px] lg:w-[280px] flex flex-col justify-between items-center gap-2 rounded-[10px] p-6 bg-gray-100 animate-pulse">
      <div className="w-full h-[280px] bg-gray-300 rounded-[10px]"></div>

      <div className="w-full flex flex-col items-center justify-start gap-1 lg:gap-2">
        <div className="h-[20px] lg:h-[24px] bg-gray-300 rounded w-3/4"></div>
        <div className="h-[12px] md:h-[16px] bg-gray-300 rounded w-1/2"></div>
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2">
        <div className="w-[128px] md:w-[160px] lg:w-[220px] h-[34px] md:h-[40px] lg:h-[50px] bg-gray-300 rounded-[10px]"></div>
        <div className="h-[12px] md:h-[16px] bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
}
