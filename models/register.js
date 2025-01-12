// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  gmail: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.models.Register || mongoose.model('Register', UserSchema);
