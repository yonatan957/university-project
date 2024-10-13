import express from "express";
import { addGrade, avg, changeGrade, getGrade, register, students } from "../controllers/teacherController";
const router = express.Router();

router.post('/register', register);

//expecting for description for test in body
router.put('/addGrade/:studentId', addGrade);

router.put('/changeGrade/:studentId', changeGrade);

router.get('/students', students);

router.get('/avg', avg);

router.get('/grade/:studentId', getGrade);
export default router;
