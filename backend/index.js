import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/authRoute.js";

dotenv.config();

await connectToDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is working at PORT ${PORT}`));

app.use((err, req, res, next) => {
  const message = err.message || "Something went wrong";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message,
  });
});
