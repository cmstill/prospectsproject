import express from 'express';
import bodyParser from 'body-parser';
import receiversRouter from './routes/receivers.routes.js';
import backsRouter from './routes/backs.routes.js';
import errorMiddleware from './middleware/errorHandler.js';
import { db } from './lib/database.js'; // its fine to rename Database class from lib/database.js here because we can rename w/ imports
import tightendsRouter from './routes/tightends.routes.js';

const { json } = bodyParser;

const app = express();
const port = 3000;
app.use(json()); // this is express.use() to set up a new middleware.  In this case, that middleware is bodyparser that allows us to parse and use incoming request bodies

app.use('/api/v1/receivers', receiversRouter);
app.use('/api/v1/backs', backsRouter);
app.use('/api/v1/tightends', tightendsRouter);

// use app.use to set up new router to '/api/v1/runningbacks

app.use(errorMiddleware());

// TODO: Environment based configs
const config = {
	url: 'mongodb://127.0.01:27017',
	database: 'prospects_app',
};

db.init(config); // calling db.init function from lib/database and passing in config param abve with the url I am connecting to

app.listen(port, () => {
  console.log(`Starting express application on port ${port}`);
}); // .listen is a method on express (saved to app) that turns on your express instance on a given port

// app.use here is express.use...a function that adds middleware(and our router).  It takes 2 params: the url endpoint you're supporting and the middleware you're adding...in this case our router we exported form .routes/excercises.routes

/* we're going to execute this file and it's going to run our service so I need for index.js to know what urls/method are supported.
..what code we call when one is invoked, etc. ...we're going to handle that with a router */