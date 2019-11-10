const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    validator: [validator.isEmail, "Please provide a valid email."]
  },
  password: {
    type: String,
    required: [true, "Please provide a valid password"],
    minlength: 8
  },
  bobaList: {
    type: [String] // List of unique _id's corresponding to boba shops (provided by Yelp)
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
