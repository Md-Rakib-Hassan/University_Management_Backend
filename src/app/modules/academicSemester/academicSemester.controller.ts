import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Semester successfully created",
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All Academic Semester retrieved successfully",
        data: result,
      });
 })

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemesters
};
