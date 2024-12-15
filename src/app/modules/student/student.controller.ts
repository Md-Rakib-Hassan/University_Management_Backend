import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";



const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Students are retrieved successfully",
    data: result,
  })
});

const getStudentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getStudentByIdFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Successfully retrieved student data.",
    data: result,
  })
});

export const StudentControllers = {
  getAllStudents,
  getStudentById,
};
