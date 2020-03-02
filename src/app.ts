import express from "express";
import bodyParser from "body-parser";
import {Sequelize} from 'sequelize';
import passport from "passport";
import helmet from "helmet";
import cors from 'cors';

// Controllers (route handlers)
import * as apiController from "./controllers/api";

// Create Express server
export const app = express();

const sequelize = new Sequelize(process.env.DB_NAME, 'math1761', '', {
    host: 'localhost',
    dialect: 'postgres'
});

app.set('sequelize', sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connection to ${process.env.DB_NAME} has been established successfully.`);
  })
  .catch((err: string) => {
    console.error('Unable to connect to the database:', err);
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
