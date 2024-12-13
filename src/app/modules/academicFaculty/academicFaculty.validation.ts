import { z } from "zod";

const academicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Academic type must be string",
  }),
});
export const FacultyValidation = {
  academicFacultyValidationSchema,
};
