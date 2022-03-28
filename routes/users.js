// routes/users.js
const userRouter = require('express').Router();
const {
  getAllUsers,
  getUser,
  pathUser,
} = require('../controllers/users');

// Router

// Роутеры для деплоя
userRouter.get('/users/me', getUser);
userRouter.patch('/users/me', pathUser);

// getAllUsers - тестовый роут, перед деплоем удалить
userRouter.get('/users/all', getAllUsers);

// Exports
module.exports = userRouter;
