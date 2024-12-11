import { model, Schema } from "mongoose";
import { AcademicSemesterCodes, AcademicSemesterNames, months } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";


const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: "string",
      enum: AcademicSemesterNames,
      required: true,
    },
    code: {
      type: "string",
      enum: AcademicSemesterCodes,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
        enum: months,
        required: true,
    },
    endMonth: {
      type: String,
        enum: months,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre('save', async function (next) {
    const isSemesterExists = await AcademicSemester.findOne(
        {
            year: this.year,
            name:this.name
        }
    )
    if (isSemesterExists) {
        throw new Error('Semester already exists');
    }
    next();
})

export const AcademicSemester=model<IAcademicSemester>('AcademicSemester', academicSemesterSchema)
