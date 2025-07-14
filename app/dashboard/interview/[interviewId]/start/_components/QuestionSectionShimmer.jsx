import React from 'react';

function QuestionsSectionShimmer() {
 return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* QuestionsSection Shimmer */}
      <div className='p-5 border rounded-lg'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className='h-8 w-16 bg-gray-200 rounded-full animate-pulse'></div>
          ))}
        </div>
        <div className='h-6 w-3/4 bg-gray-200 rounded animate-pulse my-5'></div>
        <div className='h-6 w-6 bg-gray-200 rounded-full animate-pulse'></div>
        <div className='border rounded-lg p-5 bg-gray-100 mt-20'>
          <div className='h-6 w-24 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-full bg-gray-200 rounded animate-pulse my-2'></div>
        </div>
      </div>
      {/* RecordAnswerSection Shimmer */}
      <div className='flex items-center justify-center flex-col w-full'>
        <div className='flex flex-col my-20 justify-center items-center rounded-lg gap-10 bg-gray-200 h-72 w-full animate-pulse'></div>
        <div className='h-10 w-40 bg-gray-200 rounded animate-pulse my-10'></div>
      </div>
    </div>
  );
}

export default QuestionsSectionShimmer;