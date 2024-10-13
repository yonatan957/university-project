import { Request, Response } from "express";
import TeacherRegisterDTO from "../DTO/teacherRegisterDTO";
import { createTeacher } from "../services/teacherService";

export const register = async (req: Request<any, any, TeacherRegisterDTO>, res: Response): Promise<void> => {
    try {
       const result = await createTeacher(req.body);
    } catch (error:any) {
        res.status(400).json({ error:error.message })
    }
}

export const addGrade = async (req:Request, res:Response): Promise<void> => {
    try {
        const id = req.params.id
    } catch (error) {
        
    }
}

export const students = async (req:Request, res:Response): Promise<void> => {
    try {
        
    } catch (error) {
        
    }
}

export const avg = async (req:Request, res:Response): Promise<void> => {
    try {
        
    } catch (error) {
        
    }
}

export const getGrade = async (req:Request, res:Response): Promise<void> => {
    try {
        
    } catch (error) {
        
    }
}