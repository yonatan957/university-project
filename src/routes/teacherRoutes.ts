import express from "express";
import { addGrade, avg, changeGrade, getGrade, register, students } from "../controllers/teacherController";
import { Teachers } from "../middlewares/authMiddlewar";
const router = express.Router();

/**
 * @swagger
 * /teachers/register:
 *   post:
 *      tags: [teachers]
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
 *                  example: 'david'
 *                email:
 *                  type: string
 *                  example: 'david@gmail.com'
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
 *                success: true
 */
router.post('/register', register);

/**
 * @swagger
 * /teachers/addGrade/{studentId}:
 *   put:
 *      tags: [teachers]
 *      summary: add grade to specific student
 *      description: add grade to specific student
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: 'test week two'
 *                grade:
 *                  type: number
 *                  example: 100
 *      parameters:
 *        - in: path
 *          name: studentId
 *          required: true
 *      responses:
 *        200:
 *          description: added Successfuly
 *          content:
 *            application/json:
 *              example:
 *                success: true
 */
router.put('/addGrade/:studentId',Teachers, addGrade);

/**
 * @swagger
 * /teachers/changeGrade/{studentId}:
 *   put:
 *      tags: [teachers]
 *      summary: change grade to specific student
 *      description: change grade to specific student
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                grade_id:
 *                  type: string
 *                  example: 'ewrger354'
 *                grade:
 *                  type: number
 *                  example: 100
 *      parameters:
 *        - in: path
 *          name: studentId
 *          required: true
 *      responses:
 *        200:
 *          description: added Successfuly
 *          content:
 *            application/json:
 *              example:
 *                success: true
 */
router.put('/changeGrade/:studentId',Teachers , changeGrade);

/**
 * @swagger
 * /teachers/students:
 *   get:
 *      tags: [teachers]
 *      summary: get all students
 *      description: get all students
 *      responses:
 *        200:
 *          description:  Successfuly
 *          content:
 *            application/json:
 *              example:
 *                success: true
 */
router.get('/students',Teachers , students);

/**
 * @swagger
 * /teachers/avg:
 *   get:
 *      tags: [teachers]
 *      summary: get the average of the students
 *      description: get the average of the students
 *      responses:
 *        200:
 *          description: added Successfuly
 *          content:
 *            application/json:
 *              example:
 *                average: 100
 */
router.get('/avg',Teachers , avg);

/**
 * @swagger
 * /teachers/grade/{studentId}:
 *   get:
 *      tags: [teachers]
 *      summary: get grade of specific student
 *      description: get grade of specific student
 *      parameters:
 *        - in: path
 *          name: studentId
 *          required: true
 *        - in: query
 *          name: description
 *          required: true
 *          description: test description
 *      responses:
 *        200:
 *          description: added Successfuly
 *          content:
 *            application/json:
 *              example:
 *                success: true
 */
router.get('/grade/:studentId',Teachers , getGrade);
export default router;
