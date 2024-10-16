import express from "express";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");
import connectDB from "./config/db";
import studentRoutes from "./routes/studentRoutes";
import teacherRoutes from "./routes/teacherRoutes";
import logRoutes from "./routes/logRoutes";
import {specs, swaggerUi} from './swagger/swaggerConfig';
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/log", logRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 
for documentation go to http://localhost:${PORT}/api-docs`);
});

export default app; 
 