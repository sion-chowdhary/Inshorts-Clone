import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import Connection from "../server/database/db.js";
import DefaultData from "./default.js";
import route from "./routes/route.js";

const app = express();
dotenv.config();

app.use(cors());
app.use("/", route);

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () =>
  console.log(`Service is running sucessfully on ${PORT}`)
);

DefaultData();
