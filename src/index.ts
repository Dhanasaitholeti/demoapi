import cors from "cors";
import express, { Application } from "express";
import bodyParser from "body-parser";

import { RouteHandler } from "./routes";
import ErrorMiddleware from "./middlewares/error.middleware";
import { connectToDB, sequelize } from "./utils/db";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

RouteHandler(app); //for handling routes.

app.use(ErrorMiddleware);

app.listen(8000, () => {
  console.log("The server is running on http://localhost:8000/");
});
