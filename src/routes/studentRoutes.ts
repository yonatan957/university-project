import express from "express";
import { getGread, register } from "../controllers/studentController";
import { Students } from "../middlewares/authMiddlewar";
const router = express.Router();

router.post('/register', register);
router.get('/gread/:testDescription',Students, getGread);

export default router;
