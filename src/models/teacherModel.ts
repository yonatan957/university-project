import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";
import { Istudent } from "./studentModel";

interface Iteacher {
    name: string;
    email: string;
    password: string;
    class_name: string;
    students: Types.ObjectId[] | Istudent[];
}

const teacherSchema = new Schema<Iteacher>({
    name: { type: String, required: [true, "Name is required"], minlength: 2, maxlength: 30 },
    email: { type: String, required: [true, "Email is required"], unique: true, validate: [validator.isEmail, "invalid email"] },
    password: { type: String, required: [true, "Password is required"] },
    class_name: { type: String, required: [true, "Class name is required"] },
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});

export default mongoose.model<Iteacher>("Teacher", teacherSchema);