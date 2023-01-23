const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  movies: [
    {
      title: {
        type: String,
        required: true,
      },
      movieId: {
        type: String,
        required: true,
      },
      poster_path: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
      rating: {
        type: Number,
        default: 0,
      },
      loggedCount: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = Lists = mongoose.model("lists", ListsSchema);
