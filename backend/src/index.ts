import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import sweetRouter from "./router/sweet";
import authRouter from "./router/auth";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cookieParser());
app.use(express.json({ limit: "16kb"})); // to prevent large payload attacks
app.use(cors({
  credentials : true,
  origin : "http://localhost:5173" // my frontend url
}));

app.use("/api/auth", authRouter);
app.use("/api/sweets", sweetRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});