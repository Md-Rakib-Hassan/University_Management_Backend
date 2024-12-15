import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoute } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoute } from "../modules/academicDepartment/academicDepartment.route";
import { StudentRoutes } from "../modules/student/student.route";


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
    {
        path: '/academic-departments',
        route:AcademicDepartmentRoute
    },
    {
        path: '/students',
        route:StudentRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));



export default router;