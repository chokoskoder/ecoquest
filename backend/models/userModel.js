const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
