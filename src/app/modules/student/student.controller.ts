import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";



const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: "Students are retrieved successfully",
    data: result,
  });
});

const getStudentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getStudentByIdFromDB(id);
  res.status(200).json({
    success: true,
    message: "Successfully retrieved student data.",
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getStudentById,
};
