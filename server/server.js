import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRout.js";
import userRouter from "./routes/userRoutes.js";
const app = express();
const port = process.env.PORT || 4000;
const allowedOrigin = [
  "https://advanced-authentication-authorizati-lac.vercel.app",
];
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigin, credentials: true }));

//API End points ---->

app.get("/", (req, res) => {
  res.send("API is working properly");
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  connectDB();
});
