import TeacherRegisterDTO from "../DTO/teacherRegisterDTO"
import TeacherModel from "../models/teacherModel";
import bcrypt from "bcrypt"

export const createTeacher = async (teacher:TeacherRegisterDTO):Promise<boolean> => {
    try {
        const newteacher = await TeacherModel.create(teacher);
        newteacher.password = await bcrypt.hash(teacher.password, 10)
        newteacher.save()
        return true
    } catch (error) {
        throw error
    }
}
export const addgradeByStudentId = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllStudents = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const getAverege = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const getGradeByStudentId = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}