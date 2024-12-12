import { z } from "zod";
import { AcademicSemesterCodes, AcademicSemesterNames, months } from "./academicSemester.constant";


const CreateAcademicValidationSchema = z.object({
    body: z.object({
        name: z.enum([...AcademicSemesterNames] as [string, ...string[]]),
        year: z.string(),
        code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]),
        startMonth: z.enum([...months] as [string, ...string[]]),
        endMonth: z.enum([...months] as [string, ...string[]]),
        
    })
    
})

const updateAcademicValidationSchema = z.object({
    body: z.object({
        name: z.enum([...AcademicSemesterNames] as [string, ...string[]]).optional(),
        year: z.string().optional(),
        code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]).optional(),
        startMonth: z.enum([...months] as [string, ...string[]]).optional(),
        endMonth: z.enum([...months] as [string, ...string[]]).optional(),
        
    })
})

export const AcademicSemesterValidations = {
    CreateAcademicValidationSchema,
    updateAcademicValidationSchema
}