import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
// Controllers (route handlers)
import * as apiController from "./controllers/api";
import logger from "./util/logger";

// Create Express server

mongoose.connect("mongodb://localhost:27017/blastar", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  logger.info(`${process.env.NODE_ENV} - Connected to blastar DB`);
}).catch(err => {
  logger.error(`${process.env.NODE_ENV} - DB connection Error : ${err}`);
  throw new Error(`${process.env.NODE_ENV} - DB connection Error : ${err}`);
});

export const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

/**
 * Primary app routes.
 */
app.get("/", apiController.getApi);

export default app;
