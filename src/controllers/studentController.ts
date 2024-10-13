import { Request, Response } from "express";
import { createStudent, getGreadByDescription } from "../services/studentService";
import StudentRegisterDTO from "../DTO/studentRegisterDTO";

export const register = async (req:Request<any, any, StudentRegisterDTO>, res:Response):Promise<void> => {
    try {
        const result = await createStudent(req.body);
    } catch (error:any) {
        res.status(400).json({ error:error.message })
    }
}

export const getGread = async (req:Request, res:Response):Promise<void> => {
    try {
        const result = await getGreadByDescription();
    } catch (error:any) {
        res.status(400).json({ error:error.message })
    }
}