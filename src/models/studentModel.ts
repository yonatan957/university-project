import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

interface Igrade extends Document {
    description: string;
    grade: number;
}

const gradeSchema = new Schema<Igrade>({
    description: {type: String, required: true},
    grade: {type: Number, required: true}
});

interface Istudent extends Document {
    name: string,
    email: string,
    password: string,
    grades: Igrade[]
}

const studentSchema = new Schema<Istudent>({
    name: {type: String, required: [true, "Name is required"], minlength: 2, maxlength: 30},
    email: {type: String, required: [true, "Email is required"], unique: true},
    grades: {type: [gradeSchema],default:[] , validate:[validator.isEmail, "invalid email"]}
});

export default mongoose.model<Istudent>("Student", studentSchema);