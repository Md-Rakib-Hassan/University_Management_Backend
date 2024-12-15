import { Schema, model } from "mongoose";
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  StudentMethods,
  StudentModel,
  IUserName,
} from "./student.interface";

const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  middleName: String,
  lastName: { type: String, required: [true, "Last name is required"] },
});

const guardianSchema = new Schema<IGuardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

const studentSchema = new Schema<IStudent, StudentModel, StudentMethods>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, "Student's name is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User id is required"],
    unique: true,
    ref: "User",
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not a valid gender",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    // match: [/^\S+@\S+\.\S+$/, "Email is not valid"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
    // match: [/^\+?[1-9]\d{1,14}$/, "Contact number is not valid"],
  },
  emergencyContactNo: {
    type: String,
    // match: [/^\+?[1-9]\d{1,14}$/, "Emergency contact number is not valid"],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImg: {
    type: String,
    required: [true, "Profile image URL is required"],
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemester",
  },
  academicDepartment:{
    type: Schema.Types.ObjectId,
    ref:"academicDepartment",
  }
});

studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<IStudent, StudentModel>("Student", studentSchema);
