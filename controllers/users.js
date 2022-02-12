// controllers/users.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_KEY } = require('../utils/config');
const User = require('../models/user');
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
        // _id: user._id,
        email: user.email,
        name: user.name,
        // password: user.password,
      });
    })
    .catch((err) => {
      next(err);
    });
};
// Login user
const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  console.log(email);
  console.log(password);
  console.log(JWT_KEY);

  // findUserByCredentials из models/user.js
  return User.findUserByCredentials(email, password)
    .then((user) => {
      res.send({
        token: jwt.sign({ _id: user._id }, JWT_KEY, {
          expiresIn: '7d',
        }),
      });
    })
    .catch((err) => {
      next(err);
    });
};

// Logout user
// const logoutUser = (req, res, next) => {
//   console.log(req);
//   res.status(200);
// };

// Test controller - delete
const getAllUsers = (req, res, next) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
      console.log(user);
    })
    .catch(next);
};

// Get User Info
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

// Path User Info
const pathUser = (req, res) => {
  const { name, email } = req.body;
  // console.log('pathUser');
  // console.log(req.body);
  // console.log(req.params);
  // console.log(req.user._id);

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
  // logoutUser,
  getAllUsers,
  getUser,
  pathUser,
};
