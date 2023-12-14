const mongoose = require("mongoose");
const mongooseConnection = require("../index");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongooseConnection.model("userDetails", userSchema);

module.exports = userModel;
