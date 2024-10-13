import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UserTransferDetails from "../DTO/userTransferDetails";

export const Students = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
    }
    const user = jwt.verify(token, process.env.JWT_SECRET as string) as UserTransferDetails
    if (!user) {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
    }
    res.locals.user = user;
    if (user.roll !== "student") {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
    }
    console.log(user)
    next();
}

export const Teachers = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
    }
    const user = jwt.verify(token, process.env.JWT_SECRET as string) as UserTransferDetails
    if (!user) {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
    }
    res.locals.user = user;
    if (user.roll !== "teacher") {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
    }
    console.log(user)
    next();
}