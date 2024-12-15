import { Student } from "./student.model";



const getAllStudentFromDB = async () => {
  const result = await Student.find().populate('user').populate('admissionSemester').populate({
    path: 'academicDepartment',
    populate: {
      path:'academicFaculty'
    }
  });
  return result;
};

const getStudentByIdFromDB = async (id: string) => {
  const result = await Student.findById(id).populate('user').populate('admissionSemester').populate({
    path: 'academicDepartment',
    populate: {
      path:'academicFaculty'
    }
  });
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
  getStudentByIdFromDB,
};
