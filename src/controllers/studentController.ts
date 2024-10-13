import { Request, Response, NextFunction } from "express";
import { createStudent, getGreadByDescription } from "../services/studentService";

export const register = async (req:Request, res:Response):Promise<void> => {
    try {
        const result = await createStudent();
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