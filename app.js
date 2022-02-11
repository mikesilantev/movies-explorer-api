require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/index');

const { MONGO_URI, MONGO_CONFIG, JWT_KEY } = require('./utils/config');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(MONGO_URI, MONGO_CONFIG);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Сервер на порту: ${PORT}`);
  console.log(MONGO_URI);
  console.log(JWT_KEY);
});
