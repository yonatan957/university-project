import express from "express";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());


// Routes



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; 
