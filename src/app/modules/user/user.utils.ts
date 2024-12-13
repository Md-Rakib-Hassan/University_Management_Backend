import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

export const findLastStudentId = async (year: string, sem: string) => {
  const regex = new RegExp(`^${year}${sem}`);
  const lastStudent = await User.findOne(
    {
      role: "student",
      id: { $regex: regex },
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent?.id : undefined;
};

export const generateStudentId = async (payload: IAcademicSemester) => {
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;
  const lastStudentId = await findLastStudentId(
    currentYear,
    currentSemesterCode
  );

  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); //01;
  const lastStudentYear = lastStudentId?.substring(0, 4); // 2030
  let currentId = (0).toString();

  if (
    lastStudentId &&
    lastStudentSemesterCode == currentSemesterCode &&
    lastStudentYear == currentYear
  ) {
    currentId = lastStudentId.substring(6); //0001
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
