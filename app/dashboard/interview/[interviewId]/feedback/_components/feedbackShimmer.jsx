import React from 'react';

function FeedbackShimmer() {
  return (
    <div className='p-10'>
      <div className='h-8 w-48 bg-gray-200 rounded animate-pulse'></div>
      <div className='h-6 w-64 bg-gray-200 rounded animate-pulse my-3'></div>
      <div className='h-6 w-40 bg-gray-200 rounded animate-pulse my-3'></div>
      <div className='h-4 w-full bg-gray-200 rounded animate-pulse my-2'></div>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index} className='p-2 bg-secondary rounded-lg my-2'>
          <div className='h-6 w-full bg-gray-200 rounded animate-pulse'></div>
          <div className='flex flex-col gap-2 mt-2'>
            <div className='p-2 border rounded-lg bg-gray-200 h-6 animate-pulse'></div>
            <div className='p-2 bg-red-50 text-red-900 rounded-lg bg-gray-200 h-6 animate-pulse'></div>
            <div className='p-2 bg-green-50 text-green-500 border rounded-lg bg-gray-200 h-6 animate-pulse'></div>
            <div className='p-2 bg-blue-50 text-blue-500 border rounded-lg bg-gray-200 h-6 animate-pulse'></div>
          </div>
        </div>
      ))}
      <div className='h-10 w-32 bg-gray-200 rounded animate-pulse mt-5'></div>
    </div>
  );
}

export default FeedbackShimmer;