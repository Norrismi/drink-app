const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 100
  },
  lastname: {
    type: String,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  token: {
    type: String
  },
  role: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
