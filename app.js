 import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";



import nodeRouter from "./routes/nodeRouter.js";
import edgeRouter from "./routes/edgeRouter.js";

dotenv.config()

const {DB_HOST, PORT}=process.env;

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/api/nodes", nodeRouter);
app.use ("/api/edges", edgeRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});





 mongoose.connect(DB_HOST)
 .then(() => {
  app.listen(PORT, () => {
    console.log(`Database connection successful. Use port: ${PORT}`);
  });

 }).catch((err) => {
  console.log(err.message);
  process.exit(1);
 });