import express from "express";
import { getGrade, register } from "../controllers/studentController";
import { Students } from "../middlewares/authMiddlewar";
const router = express.Router();
/**
 * @swagger
 * /students/register:
 *   post:
 *      tags: [students]
 *      summary: register
 *      description: register
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: 'zvi'
 *                email:
 *                  type: string
 *                  example: 'zvi@gmail.com'
 *                class_name:
 *                  type: string
 *                  example: 'math'
 *                password:
 *                  type: string
 *                  example: '123456'
 *      responses:
 *        200:
 *          description: added Successfuly
 *          content:
 *            application/json:
 *              example:
 *                result: true
 */
router.post('/register', register);

/**
 * @swagger
 * /students/grade/{testDescription}:
 *   get:
 *      tags: [students]
 *      summary: register
 *      description: register
 *      parameters:
 *        - in: path
 *          name: testDescription
 *          required: true
 *      responses:
 *        200:
 *          description: get Successfuly
 *          content:
 *            application/json:
 *              example:
 *                result: 100
 */
router.get('/grade/:testDescription',Students, getGrade);

export default router;
