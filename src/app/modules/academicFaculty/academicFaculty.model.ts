import { model, Schema } from "mongoose";
import { IAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

academicFacultySchema.pre("save", async function (next) {
  const isDepartmentExist = await AcademicFaculty.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new Error("Department is already exist");
  }
  next();
});

academicFacultySchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isFacultyExist = await AcademicFaculty.findOne(query);
  if (!isFacultyExist) {
    throw new Error("This faculty does not exist");
  }
  next();
});

export const AcademicFaculty = model<IAcademicFaculty>(
  "AcademicFaculty",
  academicFacultySchema
);
