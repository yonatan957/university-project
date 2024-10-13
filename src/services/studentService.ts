import StudentRegisterDTO from "../DTO/studentRegisterDTO";
import TestDescriptionDTO from "../DTO/testDescriptonDTO";
import studentModel from "../models/studentModel";
import bcrypt from "bcrypt";
import teacherModel from "../models/teacherModel";
import { Types } from "mongoose";

export const createStudent = async (
  student: StudentRegisterDTO
): Promise<boolean> => {
  try {
    const newStudent = await studentModel.create(student);
    newStudent.password = await bcrypt.hash(student.password, 10);
    const teacher = await teacherModel.findOne({
      class_name: student.class_name,
    });
    if (!teacher) {
      throw new Error("class not found");
    }
    newStudent.save();
    await teacherModel.updateOne(
      { _id: teacher._id },
      { $push: { students: newStudent._id } }
    );
    return true;
  } catch (error) {
    throw error;
  }
};

export const getGreadByDescription = async (
  testDescription: TestDescriptionDTO,
  id: string
): Promise<number> => {
  try {
    const result = await studentModel.findOne({
      _id: id,
      "grades._id": testDescription.description,
    });
    if (!result) {
      throw new Error("user not found");
    }
    if (!result.grades) {
      throw new Error("not found");
    }
    return result.grades[0].grade;
  } catch (error) {
    throw error;
  }
};
