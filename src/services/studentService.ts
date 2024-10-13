import StudentRegisterDTO from "../DTO/studentRegisterDTO"
import TestDescriptionDTO from "../DTO/testDescriptonDTO";
import studentModel from "../models/studentModel";
import bcrypt from "bcrypt"

export const createStudent = async (student:StudentRegisterDTO):Promise<boolean> => {
    try {
        const newStudent = await studentModel.create(student);
        newStudent.password = await bcrypt.hash(student.password, 10)
        newStudent.save();
        return true
    } catch (error) {
        throw error
    }
}

export const getGreadByDescription = async (testDescription:TestDescriptionDTO, id:string):Promise<number> => {
    try {
        const result = await studentModel.findOne({_id: id, "grades._id": testDescription.id});
        if (!result) {
            throw new Error("user not found")
        } 
        if (!result.grades) {
            throw new Error("not found")    
        }
        return result.grades[0].grade
    } catch (error) {
        throw error
    }
}