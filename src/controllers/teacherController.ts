import { Request, Response } from "express";
import TeacherRegisterDTO from "../DTO/teacherRegisterDTO";
import { addgradeByStudentId, changeGradeByStudentId, createTeacher, getAllStudents, getAverege, getGradeByStudentId } from "../services/teacherService";
import giveGradeDTO from "../DTO/giveGradeDTO";
import TestID from "../DTO/testDescriptonDTO";
import { get } from "http";
import changeGradeDTO from "../DTO/changeGradeDTO";

export const register = async (req: Request<any, any, TeacherRegisterDTO>, res: Response): Promise<void> => {
    try {
       const result = await createTeacher(req.body);
       res.status(201).json(result)
    } catch (error:any) {
        res.status(400).json({ error:error.message })
    }
}
// expecting for body with student id ,grade and test description
export const addGrade = async (req:Request<any, any, giveGradeDTO>, res:Response): Promise<void> => {
    try {
        const id = req.params.id
        const result = await addgradeByStudentId(id, req.body, res.locals.user.id)
        res.status(201).json({successes :result})
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
}

export const changeGrade = async (req:Request<any, any, changeGradeDTO>, res:Response): Promise<void> => {
    try {
        const id = req.params.id
        const result = await changeGradeByStudentId(id, req.body, res.locals.user.id)
        res.status(201).json({successes :result})
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
}
export const students = async (req:Request, res:Response): Promise<void> => {
    try {
        const students = await getAllStudents(res.locals.user)
        res.status(200).json(students)
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
}

export const avg = async (req:Request, res:Response): Promise<void> => {
    try {
        const average = await getAverege(res.locals.user)
        res.status(200).json(average)
    } catch (error:any) {
        res.status(400).json({ error: error.message } )
    }
}

export const getGrade = async (req:Request<any, any, TestID>, res:Response): Promise<void> => {
    try {
        const id = req.params.id
        const result = await getGradeByStudentId(id, req.body, res.locals.user.id)
        res.status(200).json(result)
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
}

