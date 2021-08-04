const mongoose = require('mongoose');
const validator = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Название обязательно'],
    minlength: [2, 'Название должно быть больше одного символа'],
    maxlength: [30, 'Название должно быть короче 30 символов'],
  },
  link: {
    type: String,
    required: [true, 'Ссылка на картинку обязательна'],
    validate: {
      validator: (v) => {
        validator.isURL(v);
      },
      message: 'Некорректная ссылка',
    },
  },
  owner: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true,
  },
  likes: {
    type: [mongoose.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
