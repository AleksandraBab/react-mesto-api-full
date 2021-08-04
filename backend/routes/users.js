const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const router = require('express').Router();
const {
  getUsers, getUserById, updateProfile, updateAvatar, getCurrentUser,
} = require('../controllers/users');

const isURL = (value) => {
  const isValid = validator.isURL(value);
  if (isValid) {
    return value;
  }
  throw new Error('Некорректная ссылка');
};

router.get('/users', getUsers);
router.get('/users/me', getCurrentUser);
router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(24),
  }),
}), getUserById);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }).unknown(true),
}), updateProfile);
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(isURL),
  }).unknown(true),
}), updateAvatar);

module.exports = router;
