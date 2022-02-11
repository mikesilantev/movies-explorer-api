// controllers/users.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { JWT_KEY } = require('../utils/config');
// Errors

// Create New User
const createUser = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
    }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// Login user
const loginUser = (req, res, next) => {
  console.log(req);
  res.status(200);
};
// Logout user
const logoutUser = (req, res, next) => {
  console.log(req);
  res.status(200);
};


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
  createUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUser,
  pathUser,
};
