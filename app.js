import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import countryRouter from "./routes/countryRouter.js";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api", countryRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Database connection successful. Use port: ${PORT}`);
});
