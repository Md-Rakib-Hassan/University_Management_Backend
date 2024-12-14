import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic department type must be string",
      required_error: "Name must be required",
    }),

    academicFaculty: z.string({
      invalid_type_error: "Academic Facility type must be string",
      required_error: "Academic Facility must be required",
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Academic department type must be string",
      })
      .optional(),

    academicFaculty: z
      .string({
        invalid_type_error: "Academic Facility type must be string",
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
