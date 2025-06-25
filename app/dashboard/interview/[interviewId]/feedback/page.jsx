"use client"
import db from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import React from 'react'
import { useEffect } from 'react';
import { use } from 'react';
import { useParams } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from '@/components/ui/button';
function Feedback() {
 
  const router = useRouter()
  const params = useParams();
  const interviewId = params.interviewId;
  const [totalRating,setTotalRating]=useState(0);
  const [feedbackList, setFeedbackList] = useState()
  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, interviewId))
      .orderBy(UserAnswer.id);
    setFeedbackList(result)
  }
  useEffect(() => {
    GetFeedback();
    
  }, [])
  useEffect(() => {
  if (feedbackList) {
    let sumRating = 0;
    feedbackList.forEach(item => {
      sumRating += parseFloat(item.rating);
    });
    setTotalRating(sumRating);
  }
}, [feedbackList]);
  if (feedbackList === undefined) return <p>Loading...</p>
  return (
    <div className='p-10'>
      {feedbackList?.length == 0 ?
      <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Found</h2>
      :<>
        <h2 className='text-3xl font-bold text-green-500'>Congratulation</h2>
      <h2 className='text-2xl font-bold '>Here is your interview feedback</h2>
      <h2 className='text-primary text-lg my-3 '>Your overall interview rating: <strong>{totalRating/5}/10</strong></h2>
      <h2 className='text-sm text-grey-500 '>Find below interview question with correct answer,Your answer and feedback for improvement</h2>
      {
        feedbackList.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-10 w-full cursor-pointer">{item.question} <ChevronDown className='h-5 w-5' /></CollapsibleTrigger>
            <CollapsibleContent>
              <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'>
                  <strong>Rating:</strong>{item.rating}
                </h2>
                <h2 className='text-sm p-2 bg-red-50 text-red-900 rounded-lg'>
                  <strong>Your Answer:</strong>{item.userAns}
                </h2>
                <h2 className='text-sm p-2 bg-green-50  text-green-500 border rounded-lg'>
                  <strong>Correct Answer:</strong>{item.correctAns}
                </h2>
                <h2 className='text-sm p-2 bg-blue-50  text-blue-500 border rounded-lg'>
                  <strong>Feedback: </strong>{item.feedback}
                </h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )
      )
      }
      </>}

      <Button className={"bg-blue-700 cursor-pointer"} onClick={() => router.replace("/dashboard")}>Go Home</Button>
    </div>
  )
}

export default Feedback