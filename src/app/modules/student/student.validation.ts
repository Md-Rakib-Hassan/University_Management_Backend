import { z } from "zod";

// Define userNameSchema
const userNameValidationSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(20, "First name cannot exceed 20 characters")
    .regex(/^[A-Z][a-z]*$/, "First Name must start with a capital letter"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});

// Define guardianSchema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

// Define localGuardianSchema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string().min(1, "Local guardian's address is required"),
});

// Define studentSchema
const studentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female", "other"], { errorMap: () => ({ message: "Gender is required" }) }),
      dateOfBirth: z.string().optional(),  // Date format validation could be added here using regex if needed
      email: z.string().email("Invalid email address").min(1, "Email address is required"),
      contactNo: z.string().min(1, "Contact number is required"),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
      presentAddress: z.string().min(1, "Present address is required"),
      permanentAddress: z.string().min(1, "Permanent address is required"),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().url("Invalid URL format").min(1, "Profile image URL is required"),
      admissionSemester: z.string(),
      academicDepartment:z.string()
  })
  })
});

export const studentValidation = {
  studentValidationSchema,
};
