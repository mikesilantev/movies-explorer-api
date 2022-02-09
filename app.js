require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI, mongoConfig } = require('./utils/config');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(MONGO_URI, mongoConfig);

app.listen(PORT, () => {
  console.log(`Сервер на порту: ${PORT}`);
  console.log(MONGO_URI);
});
