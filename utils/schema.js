import {pgTable,serial,text,varchar} from 'drizzle-orm/pg-core'
export const MockInterview=pgTable("mockInterview",{
    id:serial("id").primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull().default("React ,Node"),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})
export const UserAnswer=pgTable("userAnswer",{
    id:serial("id").primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:varchar('correctAns').notNull(),
    userAns:varchar('userAns').notNull(),
    feedback:varchar('feedback'),
    rating:varchar('rating').notNull(),
    userEmail:varchar("userEmal"),
    createdAt:varchar("createdAt")
})