import { model, Schema } from "mongoose";
import { AcademicSemesterCodes, AcademicSemesterNames, months } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";
import AppError from "../../errors/AppError";


const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterNames,
      required: true,
    },
    code: {
      type: String,
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

academicSemesterSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isSemesterExist = await AcademicSemester.findOne(query);
  if (!isSemesterExist) {
    throw new AppError(404,"This semester does not exist");
  }
  next();
});

export const AcademicSemester=model<IAcademicSemester>('AcademicSemester', academicSemesterSchema)
