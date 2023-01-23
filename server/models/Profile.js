const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  bio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  watchedCount: {
    type: Number,
    default: 0,
  },
  numberOfLists: {
    type: Number,
    default: 3,
  },
  followers: [{ type: Schema.Types.ObjectId, ref: "User", required: false }],
  following: [{ type: Schema.Types.ObjectId, ref: "User", required: false }],
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
