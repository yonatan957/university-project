import express from "express";
import { getGread, register } from "../controllers/studentController";
const router = express.Router();

router.post('/register', register);
router.get('/gread/:testDescription', getGread);

export default router;
