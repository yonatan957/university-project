import { Request, Response, NextFunction } from "express";
import { logInS, logoutS } from "../services/logService";



export const logIn = async (req:Request, res:Response):Promise<void> =>{
    try {
        const result = await logInS()
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

export const logout = async (req:Request, res:Response):Promise<void> =>{
    try {
        const result = await logoutS()
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}