import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidations.CreateAcademicValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);
router.patch(
  '/:semesterId',
  validateRequest(AcademicSemesterValidations.updateAcademicValidationSchema),
  AcademicSemesterControllers.updateAcademicSemester,
);
router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoute = router;
