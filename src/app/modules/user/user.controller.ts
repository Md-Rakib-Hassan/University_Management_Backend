import { RequestHandler } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../utils/catchAsync";

const createStudent:RequestHandler = catchAsync(async (req,res) => {
      const {password,student} = req.body;

        const result = await UserService.createStudentIntoDB(password, student);
      res.status(200).json({
        success: true,
        message: "Student is created successfully",
        data: result,
      });
    
});
  
export const UserController = {
    createStudent
}