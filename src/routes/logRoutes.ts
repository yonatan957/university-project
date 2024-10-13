import express from "express";
import { logIn, logout } from "../controllers/logController";
const router = express.Router();

/**
 * @swagger
 * /log/login:
 *   post:
 *      tags: [log]
 *      summary: log in
 *      description: log
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: 'david'
 *                password:
 *                  type: string
 *                  example: '123456'
 *      responses:
 *        200:
 *          description: added Successfuly
 *          content:
 *            application/json:
 *              example:
 *                token: sum string
 */
router.post('/login', logIn);

/**
 * @swagger
 * /log/logout:
 *   post:
 *      tags: [log]
 *      summary: log out
 *      description: log out
 *      responses:
 *        200:
 *          description: added Successfuly
 *          content:
 *            application/json:
 *              example:
 *                message: loged out
 */
router.post('/logout', logout);

export default router;
