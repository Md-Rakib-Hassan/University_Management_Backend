import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoute } from "../modules/academicFaculty/academicFaculty.route";


const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route:UserRoutes,
    },
    {
        path: '/academic-semesters',
        route:AcademicSemesterRoute
    },
    {
        path: '/academic-faculties',
        route:AcademicFacultyRoute
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));



export default router;