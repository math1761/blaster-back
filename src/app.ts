import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import helmet from "helmet";
import cors from 'cors';
import {MONGODB_URI} from "./util/secrets";

// Controllers (route handlers)
import * as apiController from "./controllers/api";
import logger from "./util/logger";

// Create Express server
export const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { logger.info('MongoDB: Connected to blastar database'); },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
});

app.use(helmet());
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
/**
 * Primary app routes.
 */
app.get("/", apiController.getApi);

export default app;
