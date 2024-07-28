import React from 'react';

export default function SkeletonProduct() {
  return (
    <div className="h-[380px] w-[280px] flex flex-col justify-between items-center gap-2 rounded-[10px] p-6 bg-[#F8F8F8] animate-pulse">
      <div className="w-full h-[280px] bg-gray-300 rounded-[10px]"></div>
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <div className="w-[220px] h-[50px] bg-gray-300 rounded-[10px]"></div>
        <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
