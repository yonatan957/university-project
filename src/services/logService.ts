import logInDTO from "../DTO/logInDTO"
import studentModel from "../models/studentModel";
import teacherModel from "../models/teacherModel";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


export const logInS = async (person:logInDTO):Promise<string> => {
    try {
        const teacher = await teacherModel.findOne({ name: person.name });
        const student = await studentModel.findOne({ name: person.name });
        if (teacher) {
            if (await bcrypt.compare(person.password, teacher.password)) {
                const token = jwt.sign({ id: teacher._id, roll: 'teacher' }, process.env.JWT_SECRET as string, { expiresIn: '15m' });
                return token
            }
        } else if (student) {
            if (student.password === person.password) {
                const token = jwt.sign({ id: student._id, roll: 'student' }, process.env.JWT_SECRET as string, { expiresIn: '15m' });
                return token
            }
        }
        throw new Error('check name and password')
    } catch (error) {
        throw error
    }
}

// export const logoutS = async () => {
//     try {
        
//     } catch (error) {
        
//     }
// }