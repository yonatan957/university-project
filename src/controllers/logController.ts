import { Request, Response, NextFunction } from "express";
import { logInS } from "../services/logService";
import logInDTO from "../DTO/logInDTO";



export const logIn = async (req:Request<any, any, logInDTO>, res:Response):Promise<void> =>{
    try {
        const token = await logInS(req.body)
        res.cookie('token', token)
        res.status(200).json({token:token})
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

export const logout = async (req:Request, res:Response):Promise<void> =>{
    try {
        res.cookie('token', '')
        res.status(200).json({message:'logged out'})
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}