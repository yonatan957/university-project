import express from "express";
import { logIn, logout } from "../controllers/logController";
const router = express.Router();

router.post('/login', logIn);
router.post('/logout', logout);

export default router;
