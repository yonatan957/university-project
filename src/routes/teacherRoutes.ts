import express from "express";
import { addGrade, avg, getGrade, register, students } from "../controllers/teacherController";
const router = express.Router();

router.post('/register', register);

//expecting for description for test in body
router.put('/addGrade/:studentId', addGrade);

router.get('/students', students);

router.get('/avg', avg);

router.get('/grade/:studentId', getGrade);
export default router;
