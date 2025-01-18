// src/server.ts
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
