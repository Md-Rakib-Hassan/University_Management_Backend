import { RequestHandler } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const result = await UserService.createStudentIntoDB(password, student);
  sendResponse(res, {
    success: true,
    message: 'Student is created successfully',
    statusCode: 200,
    data: result,
  });
});

export const UserController = {
  createStudent,
};
