import express from 'express';
import { UserController } from './user.controller';
import { studentValidation } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidation.studentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
