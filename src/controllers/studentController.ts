import { Request, Response } from "express";
import {
  createStudent,
  getGradeByDescription,
} from "../services/studentService";
import StudentRegisterDTO from "../DTO/studentRegisterDTO";
import TestDescriptionDTO from "../DTO/testDescriptonDTO";

export const register = async (
  req: Request<any, any, StudentRegisterDTO>,
  res: Response
): Promise<void> => {
  try {
    const result = await createStudent(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getGrade = async (
  req: Request<any>,
  res: Response
): Promise<void> => {
  try {
    const description: TestDescriptionDTO = {description:req.params.testDescription as string}
    const result = await getGradeByDescription(description, res.locals.user.id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
