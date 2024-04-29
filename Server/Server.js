import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import authRoute from "./Routes/authRoute.js"
const PORT = process.env.PORT||3000

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use("/api/v1/auth",authRoute);

db();

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
}) 