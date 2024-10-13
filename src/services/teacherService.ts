import changeGradeDTO from "../DTO/changeGradeDTO";
import giveGradeDTO from "../DTO/giveGradeDTO";
import TeacherRegisterDTO from "../DTO/teacherRegisterDTO";
import TestDescription from "../DTO/testDescriptonDTO";
import UserTransferDetails from "../DTO/userTransferDetails";
import studentModel, { Igrade, Istudent } from "../models/studentModel";
import teacherModel from "../models/teacherModel";
import TeacherModel from "../models/teacherModel";
import bcrypt from "bcrypt";

export const createTeacher = async (
  teacher: TeacherRegisterDTO
): Promise<boolean> => {
  try {
    const newteacher = await TeacherModel.create(teacher);
    newteacher.password = await bcrypt.hash(teacher.password, 10);
    newteacher.save();
    return true;
  } catch (error) {
    throw error;
  }
};
export const addgradeByStudentId = async (
  studentId: string,
  gradeDTO: giveGradeDTO,
  teacher: UserTransferDetails
): Promise<boolean> => {
  try {
    const result = await teacherModel.find({
      _id: teacher.id,
      "students._id": studentId,
    });
    if (!result) {
      throw new Error("user or student not found");
    }
    const student = await studentModel.findByIdAndUpdate(
      studentId,
      { $push: { grades: gradeDTO } },
      { new: true }
    );
    if (!student) {
      throw new Error("student not found");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const changeGradeByStudentId = async (
  studentId: string,
  gradeDTO: changeGradeDTO,
  teacher: UserTransferDetails
): Promise<boolean> => {
  try {
    const result = await teacherModel.find({
      _id: teacher.id,
      "students._id": studentId,
    });
    if (!result) {
      throw new Error("user or student not found");
    }
    const student = await studentModel.updateOne(
      { _id: studentId, "grades._id": gradeDTO.grade_id },
      { $set: { "grades.$.grade": gradeDTO.grade } },
      { new: true }
    );
    if (!student) {
      throw new Error("student not found");
    }
    return true;
  } catch (error) {
    throw error;
  }
};
export const getAllStudents = async (
  teacher: UserTransferDetails
): Promise<Istudent[]> => {
  try {
    const result = await teacherModel.findById(teacher.id).populate("students");
    if (!result) {
      throw new Error("user not found");
    }
    return result.students as Istudent[];
  } catch (error) {
    throw error;
  }
};

export const getAverege = async (
  teacherDetails: UserTransferDetails
): Promise<number> => {
  try {
    const teacher = await teacherModel
      .findById(teacherDetails.id)
      .populate("students");
    if (!teacher) {
      throw new Error("user not found");
    }
    const average =
      (teacher.students as Istudent[]).reduce((sum, student) => {
        return (
          sum +
          student.grades.reduce((sum, grade) => {
            return sum + grade.grade;
          }, 0) /
            student.grades.length
        );
      }, 0) / (teacher.students as Istudent[]).length;
    return average;
  } catch (error) {
    throw error;
  }
};

export const getGradeByStudentId = async (
  studentId: string,
  test: TestDescription,
  teacherDetails: UserTransferDetails
) => {
  try {
    const teacher = await teacherModel.find({
      _id: teacherDetails.id,
      "students._id": studentId,
    });
    if (!teacher) {
      throw new Error("user or student not found");
    }
    const student = await studentModel.findById(studentId);
    if (!student) {
      throw new Error("student not found");
    }
    const grade = (student.grades as Igrade[]).find(
      (grade) => grade.description === test.description
    );
    if (!grade) {
      throw new Error("grade not found");
    }
    return grade.grade;
  } catch (error) {
    throw error;
  }
};
