require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const { errors } = require('celebrate');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const limiter = require('./middlewares/rateLimiter');
// CORS
// RATE LIMITER

const errorHandler = require('./middlewares/errors');

const router = require('./routes/index');
const { MONGO_URI, MONGO_CONFIG } = require('./utils/config');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(MONGO_URI, MONGO_CONFIG);
app.use(cors);
app.use(helmet());
app.use(limiter);
app.use(router);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
