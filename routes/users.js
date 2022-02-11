// routes/users.js
const userRouter = require('express').Router();
const {
  getAllUsers,
  getUser,
  pathUser,
} = require('../controllers/users');

// Router
// getAllUsers - тестовый роут, перед деплоем удалить
userRouter.get('/users/me/', getAllUsers);
// Роутеры для деплоя
userRouter.get('/users/me/', getUser);
userRouter.post('/users/me/', pathUser);
// Exports
module.exports = userRouter;
