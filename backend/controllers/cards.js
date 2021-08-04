const Card = require('../models/card');
const NotFoundError = require('../errors/not-found');
const ValidationError = require('../errors/validation-error');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then(cards => res.status(200).send(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then(card => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        next(new ValidationError('Переданные данные не валидны'));
      }
      next();
    });
};

const checkCardOwner = (req, res, next) => {
  const { cardId } = req.params;

  const promise = new Promise((resolve) => {
    Card.findById(cardId)
      .orFail(() => {
        next(new NotFoundError('Карточка не найдена'));
      })
      .then(card => resolve(card))
      .catch((err) => {
        if (err.name === 'CastError') {
          next(new ValidationError('Переданные данные не валидны'));
        }
        next();
      });
  });
  return promise;
};

module.exports.deleteCard = (req, res, next) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  checkCardOwner(req, res, next)
    .then((card) => {
      if (card.owner._id.toString() === userId) {
        return Card.findByIdAndRemove(cardId)
          .then(() => res.send({ message: 'Карточка удалёна' }))
          .catch((err) => {
            if (err.name === 'CastError') {
              next(new ValidationError('Переданные данные не валидны'));
            }
            next();
          });
      }
      const err = new Error('Удаление чужих карточек запрещено');
      err.statusCode = 403;
      return next(err);
    })
    .catch(() => {
      next();
    });
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      next(new NotFoundError('Карточка не найдена'));
    })
    .then(card => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Переданные данные не валидны'));
      }
      next();
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      next(new NotFoundError('Карточка не найдена'));
    })
    .then(card => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Переданные данные не валидны'));
      }
      next();
    });
};
