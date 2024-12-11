import { Model, Types } from "mongoose";

export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface IStudent {
  id: string;
  name: IUserName;
  user: Types.ObjectId;
  gender: "male" | "female"|"other";
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo?: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
}

export interface StudentMethods{
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<IStudent|null>;
}

export type StudentModel = Model<IStudent, Record<string,never>, StudentMethods>;