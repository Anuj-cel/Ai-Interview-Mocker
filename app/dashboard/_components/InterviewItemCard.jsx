import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
function InterviewItemCard({interview}) {
  const router=useRouter()
  const onStart=()=>{
    router.push("/dashboard/interview/"+interview?.mockId);
  }
  const onFeedback=()=>{
    router.push("/dashboard/interview/"+interview?.mockId+"/feedback");
  }
  return (
    <div className='border shadow-lg rounded-lg p-3'>
        <h2 className='font-bold text-blue-500 '>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperience}</h2>
        <h2 className='text-sm text-gray-400'>Created At:{interview?.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
          <Button size={"sm"} variant={"outline"} className="cursor-pointer" onClick={onFeedback}>Feedback</Button>
          <Button size={"sm"} className={"cursor-pointer"} onClick={onStart}>Start</Button> 
        </div>
    </div>
  )
}

export default InterviewItemCard