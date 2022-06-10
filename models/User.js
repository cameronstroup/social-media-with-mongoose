const { Schema, model } = require("mongoose");
const usernameSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  thoughts: {
    type: Date,
    default: Date.now,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],

  toJSON: {
    getters: true,
    virtuals: true,
  },
});

const User = model("User", usernameSchema);
module.exports = User;
