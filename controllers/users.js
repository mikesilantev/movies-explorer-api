// controllers/users.js
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const User = require('../models/user');

const getAllUsers = (req, res, next) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
      console.log(user);
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  User.findById({ _id: req.params.id })
    .orFail(() => {
      console.log('controllers/users.js orFail getUser');
    })
    .then((user) => {
      res.status(200).send(user);
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

const pathUser = (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  User.findByIdAndUpdate(
    { _id: req.user._id },
    { name, email },
    { new: true },
  )
    .orFail(() => {
      console.log('ОШИБКА');
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllUsers,
  getUser,
  pathUser,
};
