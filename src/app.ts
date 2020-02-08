import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import helmet from "helmet";
import io from 'socket.io';
import {MONGODB_URI} from "./util/secrets";
import {createRoom} from './controllers/room';

const http = require('http')(io);

// Controllers (route handlers)
import * as apiController from "./controllers/api";

// Create Express server
export const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
});

app.set("io", io);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

const server = http.createServer(app);
/**
 * Primary app routes.
 */
app.get("/", apiController.getApi);
app.post('/room/create', createRoom);

export default server;
