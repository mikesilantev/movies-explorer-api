require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { errors } = require('celebrate');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const limiter = require('./middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errors');

const router = require('./routes/index');
const { MONGO_URI, MONGO_CONFIG } = require('./utils/config');

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors);
mongoose.connect(MONGO_URI, MONGO_CONFIG);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(helmet());
app.use(limiter);
app.use(router);
app.use(errors());
app.use(errorHandler);
app.use(errorLogger);

app.listen(PORT);
