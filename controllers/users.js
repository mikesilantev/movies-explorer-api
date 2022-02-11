// controllers/users.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Models
const User = require('../models/user');

// Create New User

// Login user

// Logout user















const getAllUsers = (req, res, next) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
      console.log(user);
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  const id = req.user._id;
  console.log(req);
  console.log(id);
  User.findById(id)
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
  console.log('pathUser');
  console.log(req.body);
  console.log(req.params);
  console.log(req.user._id);

  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      New: true,
      runValidators: true,
      upsert: false,
    },
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
