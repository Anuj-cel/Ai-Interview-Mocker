import React from 'react';

function InterviewItemCardShimmer() {
  return (
    <div className='border shadow-lg rounded-lg p-3'>
      <div className='h-6 w-3/4 bg-gray-200 rounded animate-pulse'></div>
      <div className='h-4 w-1/2 bg-gray-200 rounded animate-pulse mt-2'></div>
      <div className='h-4 w-1/3 bg-gray-200 rounded animate-pulse mt-2'></div>
      <div className='flex justify-between mt-2 gap-5'>
        <div className='h-8 w-20 bg-gray-200 rounded animate-pulse'></div>
        <div className='h-8 w-20 bg-gray-200 rounded animate-pulse'></div>
      </div>
    </div>
  );
}

export default InterviewItemCardShimmer;