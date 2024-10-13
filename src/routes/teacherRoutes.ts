import express from "express";
import { addGrade, avg, changeGrade, getGrade, register, students } from "../controllers/teacherController";
import { Teachers } from "../middlewares/authMiddlewar";
const router = express.Router();

router.post('/register', register);

//expecting for description for test in body
router.put('/addGrade/:studentId',Teachers, addGrade);

router.put('/changeGrade/:studentId',Teachers , changeGrade);

router.get('/students',Teachers , students);

router.get('/avg',Teachers , avg);

router.get('/grade/:studentId',Teachers , getGrade);
export default router;
