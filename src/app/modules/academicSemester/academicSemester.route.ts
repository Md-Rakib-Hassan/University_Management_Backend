import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
const router = express.Router()
    
router.post('/create-academic-semester', validateRequest(AcademicSemesterValidations.CreateAcademicValidationSchema), AcademicSemesterControllers.createAcademicSemester);
router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoute = router;