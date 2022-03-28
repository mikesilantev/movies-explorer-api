// routes/users.js
const userRouter = require('express').Router();
const {
  getAllUsers,
  getUser,
  pathUser,
} = require('../controllers/users');

const { updateUserValidation } = require('../middlewares/celebrate');

// Router

// Роутеры для деплоя
userRouter.get('/users/me', getUser);
userRouter.patch('/users/me', updateUserValidation, pathUser);

// getAllUsers - тестовый роут, перед деплоем удалить
userRouter.get('/users/all', getAllUsers);

// Exports
module.exports = userRouter;
