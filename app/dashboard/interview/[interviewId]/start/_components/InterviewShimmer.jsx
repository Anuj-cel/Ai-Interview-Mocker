import React from 'react';

function InterviewShimmer() {
  return (
    <div className='my-10'>
      <div className='h-8 w-48 bg-gray-200 rounded animate-pulse'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col p-5 rounded-lg border gap-5'>
            <div className='h-6 w-3/4 bg-gray-200 rounded animate-pulse'></div>
            <div className='h-6 w-full bg-gray-200 rounded animate-pulse'></div>
            <div className='h-6 w-1/2 bg-gray-200 rounded animate-pulse'></div>
          </div>
          <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
            <div className='h-6 w-24 bg-yellow-300 rounded animate-pulse'></div>
            <div className='h-6 w-full bg-yellow-300 rounded animate-pulse mt-3'></div>
          </div>
        </div>
        <div className='h-72 w-full bg-gray-200 rounded-lg border animate-pulse'></div>
      </div>
      <div className='flex justify-end items-end mt-5'>
        <div className='h-10 w-32 bg-gray-200 rounded animate-pulse'></div>
      </div>
    </div>
  );
}

export default InterviewShimmer;