import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.PORT || 5001;
const uri = process.env.MONGODB_URI;

try {
  mongoose.connect(uri);
  console.log("Database Connected Successfully");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
