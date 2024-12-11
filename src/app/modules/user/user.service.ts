import config from "../../config";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: IStudent) => {
    const userData:Partial<IUser> = {};
    userData.password = password || config.default_pass as string;
    userData.role = 'student';
    userData.id='213-15-44124'
    const newUser = await User.create(userData);
    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent =await Student.create(studentData);
        return newStudent;
    }
};
  
export const UserService = {
    createStudentIntoDB
}