// routes/users.js
const userRouter = require('express').Router();
const {
  createUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUser,
  pathUser,
} = require('../controllers/users');

// Router

// Роутеры для деплоя
userRouter.post('/signup', createUser);
userRouter.post('/signin', loginUser);
userRouter.post('/signout', logoutUser);

userRouter.get('/users/me/', getUser);
userRouter.post('/users/me/', pathUser);

// getAllUsers - тестовый роут, перед деплоем удалить
userRouter.get('/users/me/', getAllUsers);

// Exports
module.exports = userRouter;
