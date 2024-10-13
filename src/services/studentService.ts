import StudentRegisterDTO from "../DTO/studentRegisterDTO"
import studentModel from "../models/studentModel";

export const createStudent = async (student:StudentRegisterDTO):Promise<boolean> => {
    try {
        const newStudent = await studentModel.create(student);
        newStudent.save();
        return true
    } catch (error) {
        throw error
    }
}

export const getGreadByDescription = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}