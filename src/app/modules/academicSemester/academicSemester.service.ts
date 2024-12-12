import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: IAcademicSemester) => {

    type TAcademicSemesterNameCodeValidator = {
        [key: string]: string;
}

  const academicSemesterNameCodeValidator:TAcademicSemesterNameCodeValidator = {
    Fall: "01",
    Spring: "02",
    Summer: "03",
    };
    if (academicSemesterNameCodeValidator[payload.name] !== payload.code) {
        throw new Error('Invalid Semester Code');
    }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
