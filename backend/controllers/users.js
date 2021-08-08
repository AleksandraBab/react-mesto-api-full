const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found');
const ValidationError = require('../errors/validation-error');
const UnauthorizedError = require('../errors/unauthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then(users => res.status(200).send(users))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    email, password, name, about, avatar,
  } = req.body;

  if (!email || !password) {
    const err = new Error('Email или пароль отсутсвуют');
    err.statusCode = 400;
    next(err);
  }

  User.findOne({ email })
    .then((user) => {
      if (user) {
        const err = new Error('Такой пользователь уже существует');
        err.statusCode = 409;
        next(err);
      }
      bcrypt.hash(password, 10)
        .then(hash => User.create({
          email,
          password: hash,
          name,
          about,
          avatar,
        }))
        .then(({ _id }) => res.status(201).send({
          message: 'Пользователь успешно создан',
          user: { _id, email },
        }))
        .catch((err) => {
          if (err.name === 'ValidationError') {
            next(new ValidationError('Переданные данные не валидны'));
          }
          next();
        });
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const err = new Error('Email или пароль отсутсвуют');
    err.statusCode = 400;
    next(err);
  }

  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        next(new UnauthorizedError('Неправильные почта или пароль'));
      }

      bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            next(new UnauthorizedError('Неправильные почта или пароль'));
          }
          const token = jwt.sign(
            { _id: user._id },
            NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
            { expiresIn: '7d' },
          );

          res
            .send({ token });
        })
        .catch(() => {
          next();
        });
    })
    .catch(() => {
      next();
    });
};

module.exports.getUserById = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail(() => {
      next(new NotFoundError('Пользователь не найден'));
    })
    .then(user => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Переданные данные не валидны'));
      }
      next();
    });
};

module.exports.getCurrentUser = (req, res, next) => {
  const userId = req.user._id;

  User.findById(userId)
    .orFail(() => {
      next(new NotFoundError('Пользователь не найден'));
    })
    .then(user => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Переданные данные не валидны'));
      }
      next();
    });
};

module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .orFail(() => {
      next(new NotFoundError('Пользователь не найден'));
    })
    .then(user => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        next(new ValidationError('Переданные данные не валидны'));
      }
      next();
    });
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .orFail(() => {
      next(new NotFoundError('Пользователь не найден'));
    })
    .then(user => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        next(new ValidationError('Переданные данные не валидны'));
      }
      next();
    });
};
