"use client"
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
const InterviewContext = React.createContext();
function InterviewProvider({children}) {
     const [interviewData, setInterviewData] = useState(null);
  return (
    <InterviewContext.Provider value={{ interviewData, setInterviewData }}>
        {children}
    </InterviewContext.Provider>
  )
}
export { InterviewContext, InterviewProvider };