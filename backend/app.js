const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const validator = require('validator');
const { errors, celebrate, Joi } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const usersRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const {
  createUser, login,
} = require('./controllers/users');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const NotFoundError = require('./errors/not-found');

const allowedCors = [
  'localhost:3001',
  'http://localhost:3001',
  'http://capibara.students.nomoredomains.rocks',
  'https://capibara.students.nomoredomains.rocks',
];

const isEmail = (value) => {
  const isValid = validator.isEmail(value);
  if (isValid) {
    return value;
  }
  throw new Error('Email некорректный');
};

const { PORT = 3000 } = process.env;
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mesto', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger);

app.use(function(req, res, next) {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.status(200).send();
  }

  next();
});

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom(isEmail),
    password: Joi.string().required(),
  }).unknown(true),
}), login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom(isEmail),
    password: Joi.string().required(),
  }).unknown(true),
}), createUser);
app.use(auth);
app.use('/', usersRouter);
app.use('/', cardRouter);

app.use(errorLogger);
app.use(errors());
app.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});
app.use(error);

app.listen();
